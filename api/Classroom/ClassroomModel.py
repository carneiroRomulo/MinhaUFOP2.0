from django.db import models

from api.Building.BuildingModel import Building

class Classroom(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    building = models.ForeignKey(Building, on_delete=models.PROTECT)
    name = models.CharField(max_length=100)
    capacity = models.IntegerField()
    
    def __str__(self):
        return f'{self.code}'
        