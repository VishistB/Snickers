# Generated by Django 4.2 on 2023-04-08 21:38

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0003_alter_session_slug_agoratoken'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='participants',
            field=models.BigIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='session',
            name='slug',
            field=models.UUIDField(default=uuid.UUID('e0489fda-1bd1-4465-bdb2-8856863379d6'), primary_key=True, serialize=False),
        ),
    ]
