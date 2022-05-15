from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .TeacherModel import Teacher
from .TeacherSerializer import  TeacherSerializer

class TeacherList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()
    
    def create(self, request, format=None):
        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid():
            name = Teacher.objects.filter(name = serializer.validated_data.get('name'))
            code = Teacher.objects.filter(code = serializer.validated_data.get('code'))
            if name.exists():
                return Response({'message':'Já existe um prédio com este nome'}, status=status.HTTP_409_CONFLICT)
            elif code.exists():
                return Response({'message':'Já existe um prédio com este código'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  TeacherSerializer
    queryset = Teacher.objects.all()