from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .ClassroomModel import Classroom
from .ClassroomSerializer import  ClassroomSerializer

class ClassroomList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = ClassroomSerializer
    queryset = Classroom.objects.all()
    
    def create(self, request, format=None):
        serializer = ClassroomSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            building = serializer.validated_data.get('building')
            
            queryset = Classroom.objects.filter(name=name, building=building)
            if queryset.exists():
                return Response({'message':'Já existe uma sala com esse nome neste prédio'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ClassroomDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  ClassroomSerializer
    queryset = Classroom.objects.all()