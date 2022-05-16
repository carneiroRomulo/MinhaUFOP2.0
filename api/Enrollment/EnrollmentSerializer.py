from rest_framework import serializers
from .EnrollmentModel import Enrollment
from ..Period.PeriodModel import Period
from ..AvailableSubject.AvailableSubjectModel import AvailableSubject

class EnrollmentSerializer(serializers.ModelSerializer):
    # period = Period.objects.all()
    # subject = AvailableSubject.objects.filter(period = period)
    
    class Meta:
        model = Enrollment
        fields = ('id', 'timestamp', 'updated_at', 'is_active', 'period', 'student', 'subject')
        read_only_fields = ('id', 'timestamp', )