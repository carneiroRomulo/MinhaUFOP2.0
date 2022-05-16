from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .SubjectModel import Subject
from .SubjectSerializer import  SubjectSerializer

class SubjectList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
    
    def create(self, request, format=None):
        serializer = SubjectSerializer(data=request.data)
        if serializer.is_valid():
            name = Subject.objects.filter(name = serializer.validated_data.get('name'))
            code = Subject.objects.filter(code = serializer.validated_data.get('code'))
            
            if name.exists():
                return Response({'message':'Já existe uma disciplina com este nome'}, status=status.HTTP_409_CONFLICT)
            
            elif code.exists():
                return Response({'message':'Já existe uma disciplina com este código'}, status=status.HTTP_409_CONFLICT)
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  SubjectSerializer
    queryset = Subject.objects.all()