from django.db import models

from api.Building.BuildingModel import Building

class Department(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=50)
    building = models.ForeignKey(Building, on_delete=models.PROTECT)
    
    def __str__(self):
        return f'{self.code}'
        