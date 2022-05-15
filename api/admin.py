from django.contrib import admin

from .Cardapio import CardapioModel

class CardapioAdmin(admin.ModelAdmin):
    list_display = ('id', 'timestamp', 'date', 'tipo', 'protein_main', 'protein_secondary')
admin.site.register(CardapioModel.Cardapio, CardapioAdmin)

       