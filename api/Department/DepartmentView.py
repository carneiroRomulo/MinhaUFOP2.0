from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .DepartmentModel import Department
from .DepartmentSerializer import  DepartmentSerializer

class DepartmentList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    
    def create(self, request, format=None):
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            name = Department.objects.filter(name = serializer.validated_data.get('name'))
            code = Department.objects.filter(code = serializer.validated_data.get('code'))
            if name.exists():
                return Response({'message':'Já existe um departamento com este nome'}, status=status.HTTP_409_CONFLICT)
            elif code.exists():
                return Response({'message':'Já existe um departamento com este código'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DepartmentDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  DepartmentSerializer
    queryset = Department.objects.all()