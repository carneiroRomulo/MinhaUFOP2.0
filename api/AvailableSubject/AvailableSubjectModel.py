from django.db import models

from api.Subject.SubjectModel import Subject
from api.Teacher.TeacherModel import Teacher
from api.Period.PeriodModel import Period
from api.Classroom.ClassroomModel import Classroom

class AvailableSubject(models.Model):
    DAYS_IN_WEEK = (
        ('---', '---'),
        ('Segunda', 'Segunda'),
        ('Terça', 'Terça'),
        ('Quarta', 'Quarta'),
        ('Quinta', 'Quinta'),
        ('Sexta', 'Sexta'),
        ('Sábado', 'Sábado'),
    )
    
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    period = models.ForeignKey(Period, on_delete=models.PROTECT)
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)
    teacher = models.ForeignKey(Teacher, on_delete=models.PROTECT)
    classroom = models.ForeignKey(Classroom, on_delete=models.PROTECT)
    
    day_1 = models.CharField(max_length=50, choices=DAYS_IN_WEEK, default=DAYS_IN_WEEK[0])
    day_1_time_1 = models.TimeField(null=True)
    day_1_time_2 = models.TimeField(null=True)
    
    day_2 = models.CharField(max_length=50, choices=DAYS_IN_WEEK, default=DAYS_IN_WEEK[0])
    day_2_time_1 = models.TimeField(null=True)
    day_2_time_2 = models.TimeField(null=True)
    
    def __str__(self):
        return f'{self.subject}'
        