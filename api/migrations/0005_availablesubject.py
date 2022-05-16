# Generated by Django 4.0.1 on 2022-05-16 02:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_period'),
    ]

    operations = [
        migrations.CreateModel(
            name='AvailableSubject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateField(auto_now=True)),
                ('classroom', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.classroom')),
                ('period', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.period')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.subject')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.teacher')),
            ],
        ),
    ]