from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .EnrollmentModel import Enrollment
from .EnrollmentSerializer import  EnrollmentSerializer

class EnrollmentList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = EnrollmentSerializer
    queryset = Enrollment.objects.all()
    
    def create(self, request, format=None):
        serializer = EnrollmentSerializer(data=request.data)
        if serializer.is_valid():
            period = serializer.validated_data.get('period')
            student = serializer.validated_data.get('student')
            subject = serializer.validated_data.get('subject')
            
            queryset = Enrollment.objects.filter(period=period, student=student, subject=subject)
            if queryset.exists():
                return Response({'message':'Estudante já matrículado nesta disciplina'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EnrollmentDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  EnrollmentSerializer
    queryset = Enrollment.objects.all()