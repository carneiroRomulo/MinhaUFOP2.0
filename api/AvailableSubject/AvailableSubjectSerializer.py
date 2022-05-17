from rest_framework import serializers
from .AvailableSubjectModel import AvailableSubject

class AvailableSubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableSubject
        fields = '__all__'
    
                
