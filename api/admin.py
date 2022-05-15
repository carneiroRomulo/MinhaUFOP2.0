from django.contrib import admin

from .Menu import MenuModel
from .Subject import SubjectModel
from .Department import DepartmentModel
from .Building import BuildingModel

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