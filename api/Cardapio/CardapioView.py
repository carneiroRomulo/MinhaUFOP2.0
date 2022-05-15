from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .CardapioModel import Cardapio
from .CardapioSerializer import  CardapioSerializer

class CardapioList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = CardapioSerializer
    queryset = Cardapio.objects.all().order_by('-date')
    
    def create(self, request, format=None):
        serializer = CardapioSerializer(data=request.data)
        if serializer.is_valid():
            date = serializer.validated_data.get('date')
            tipo = serializer.validated_data.get('tipo')
            
            queryset = Cardapio.objects.filter(date=date, tipo=tipo)
            if queryset.exists():
                return Response({'message':'Já existe um cardápio para este dia/horario'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CardapioDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  CardapioSerializer
    queryset = Cardapio.objects.all()