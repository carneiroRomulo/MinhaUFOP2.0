from django.db import models

from api.Subject.SubjectModel import Subject
from api.Teacher.TeacherModel import Teacher
from api.Period.PeriodModel import Period
from api.Classroom.ClassroomModel import Classroom

class AvailableSubject(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    period = models.ForeignKey(Period, on_delete=models.PROTECT)
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT)
    teacher = models.ForeignKey(Teacher, on_delete=models.PROTECT)
    classroom = models.ForeignKey(Classroom, on_delete=models.PROTECT)
    
    def __str__(self):
        return f'{self.subject}'
        