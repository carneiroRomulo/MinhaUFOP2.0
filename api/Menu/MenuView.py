from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from .MenuModel import Menu
from .MenuSerializer import  MenuSerializer

class MenuList(generics.ListCreateAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()
    
    def create(self, request, format=None):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            date = serializer.validated_data.get('date')
            period_of_day = serializer.validated_data.get('period_of_day')
            
            queryset = Menu.objects.filter(date=date, period_of_day=period_of_day)
            if queryset.exists():
                return Response({'message':'Já existe um cardápio para este dia/horario'}, status=status.HTTP_409_CONFLICT)
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MenuDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAdminUser]
    serializer_class =  MenuSerializer
    queryset = Menu.objects.all()