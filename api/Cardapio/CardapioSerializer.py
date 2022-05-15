from rest_framework import serializers
from .CardapioModel import Cardapio

class CardapioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cardapio
        fields = '__all__'
    
                
