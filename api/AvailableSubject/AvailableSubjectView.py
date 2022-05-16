from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .AvailableSubjectModel import AvailableSubject
from .AvailableSubjectSerializer import  AvailableSubjectSerializer

class AvailableSubjectList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = AvailableSubjectSerializer
    queryset = AvailableSubject.objects.all()
    
    def create(self, request, format=None):
        serializer = AvailableSubjectSerializer(data=request.data)
        if serializer.is_valid():
            period = serializer.validated_data.get('period')
            subject = serializer.validated_data.get('subject')
            
            queryset = AvailableSubject.objects.filter(period=period, subject=subject)
            if queryset.exists():
                return Response({'message':'Essa disciplina já está sendo ofertada neste periodo'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AvailableSubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  AvailableSubjectSerializer
    queryset = AvailableSubject.objects.all()