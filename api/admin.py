from django.contrib import admin

from .Menu import MenuModel
from .Building import BuildingModel
from .Department import DepartmentModel
from .Subject import SubjectModel
from .Teacher import TeacherModel

class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'date', 'period_of_day', 'protein_main', 'protein_secondary')
admin.site.register(MenuModel.Menu, MenuAdmin)

class BuildingAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'name', 'code')
admin.site.register(BuildingModel.Building, BuildingAdmin)

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'name', 'code')
admin.site.register(DepartmentModel.Department, DepartmentAdmin)
       
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'name', 'code', 'department')
admin.site.register(SubjectModel.Subject, SubjectAdmin)

class TeacherAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'name', 'code', 'department')
admin.site.register(TeacherModel.Teacher, TeacherAdmin)