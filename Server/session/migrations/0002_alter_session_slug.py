# Generated by Django 4.2 on 2023-04-08 20:07

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='slug',
            field=models.UUIDField(default=uuid.UUID('b39972a1-df84-40cf-a041-33fc5c34ff3a'), primary_key=True, serialize=False),
        ),
    ]
