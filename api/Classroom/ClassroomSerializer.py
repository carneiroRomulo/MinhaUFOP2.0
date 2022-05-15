from rest_framework import serializers
from .ClassroomModel import Classroom

class ClassroomSerializer(serializers.ModelSerializer):
    capacity = serializers.IntegerField(min_value=10, max_value=100000)
    
    class Meta:
        model = Classroom
        fields = '__all__'
    
                
