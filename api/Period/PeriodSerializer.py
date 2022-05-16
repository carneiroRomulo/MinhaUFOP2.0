from rest_framework import serializers
from .PeriodModel import Period

class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Period
        fields = '__all__'
    
                
