from rest_framework import serializers
from .DepartmentModel import Department

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'
    
                
