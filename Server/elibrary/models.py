from django.db import models
from register.models import User
from django.contrib.postgres.fields import ArrayField

# Create your models here.


def resourceUpload(instance, filename):
    return f"{instance.user.email.replace('@', '_').replace('.', '_')}_{filename}"

class Resource(models.Model):
    file = models.FileField(upload_to=resourceUpload)
    user = models.ForeignKey(User, on_delete=models.SET_NULL)
    tags = ArrayField(models.CharField(max_length=200))

    def __str__(self):
        return self.file.name
