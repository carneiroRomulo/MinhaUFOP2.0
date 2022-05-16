from django.db import models

class Period(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    start_at = models.DateField()
    end_at = models.DateField()
    code = models.CharField(max_length=50)
    
    def __str__(self):
        return f'{self.code}'
        