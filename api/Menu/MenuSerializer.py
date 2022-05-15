from rest_framework import serializers
from .MenuModel import Menu

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
    
                
