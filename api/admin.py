from django.contrib import admin

from .Menu import MenuModel
from .Building import BuildingModel
from .Department import DepartmentModel
from .Subject import SubjectModel
from .Teacher import TeacherModel
from .Classroom import ClassroomModel
from .AvailableSubject import AvailableSubjectModel

class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'date', 'period_of_day', 'protein_main', 'protein_secondary')
admin.site.register(MenuModel.Menu, MenuAdmin)

class BuildingAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'name', 'code')
admin.site.register(BuildingModel.Building, BuildingAdmin)

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'name', 'code')
admin.site.register(DepartmentModel.Department, DepartmentAdmin)
       
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'name', 'code', 'department')
admin.site.register(SubjectModel.Subject, SubjectAdmin)

class TeacherAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'name', 'code', 'department')
admin.site.register(TeacherModel.Teacher, TeacherAdmin)

class ClassroomAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'building', 'name', 'capacity')
admin.site.register(ClassroomModel.Classroom, ClassroomAdmin)

class AvailableSubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'updated_at', 'subject', 'teacher', 'period', 'classroom')
admin.site.register(AvailableSubjectModel.AvailableSubject, AvailableSubjectAdmin)