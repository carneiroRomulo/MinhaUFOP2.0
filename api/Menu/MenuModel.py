from django.db import models

PERIOD_OF_DAY = (
    ('---', '---'),
    ('Almoço', 'Almoço'),
    ('Janta', 'Janta'),
)

SALAD = (
    ('---', '---'),
    ('Alface Crespo', 'Alface Crespo'),
    ('Mix de Salada', 'Mix de Salada'),
)

PROTEIN_MAIN = (
    ('---', '---'),
    ('Carne de Panela', 'Carne de Panela'),
    ('Frango Frito', 'Frango Frito'),
    ('Frango Assado', 'Frango Assada'),
    ('Pernil', 'Pernil'),
)

PROTEIN_SECONDARY = (
    ('---', '---'),
    ('Beringela Refogada', 'Beringela Refogada'),
    ('Bolinho de Grão de Bico', 'Bolinho de Grão de Bico'),
)

FRUITS = (
    ('---', '---'),
    ('Maça', 'Maça'),
    ('Banana', 'Banana'),
    ('Melancia', 'Melancia'),
    ('Pudim', 'Pudim'),
    
)

class Menu(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    date = models.DateField()
    
    period_of_day = models.CharField(choices=PERIOD_OF_DAY, max_length=100, default=PERIOD_OF_DAY[0])
    
    salad = models.CharField(choices=SALAD, max_length=100, default=SALAD[0])
    protein_main = models.CharField(choices=PROTEIN_MAIN, max_length=100, default=PROTEIN_MAIN[0])
    protein_secondary = models.CharField(choices=PROTEIN_SECONDARY, max_length=100, default=FRUITS[0])
    
    rice_white = models.BooleanField(default=True)
    rice_brown = models.BooleanField(default=True)
    beans = models.BooleanField(default=True)
    
    fruit = models.CharField(choices=FRUITS, max_length=50, default=FRUITS[0])
    
    def __str__(self):
        return f'{self.date}'
        