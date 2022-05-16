from django.db import models
from django.contrib.auth.models import User

from api.AvailableSubject.AvailableSubjectModel import AvailableSubject
from api.Period.PeriodModel import Period

class Enrollment(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    period = models.ForeignKey(to=Period, on_delete=models.PROTECT)
    student = models.ForeignKey(to=User, on_delete=models.PROTECT)
    subject = models.ForeignKey(to=AvailableSubject, on_delete=models.PROTECT)
    
    def __str__(self):
        return f'{self.student} - {self.period} - {self.subject}'
        