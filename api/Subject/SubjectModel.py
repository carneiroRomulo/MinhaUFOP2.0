from django.db import models

from api.Department.DepartmentModel import Department

class Subject(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.code}'
        