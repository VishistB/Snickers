# Generated by Django 4.2 on 2023-04-09 02:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0002_idimage_user_id_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(max_length=50),
        ),
    ]
