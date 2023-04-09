from django.db import models
import uuid
from django.contrib.postgres.fields import ArrayField

from register.models import User

# Create your models here.

TYPE_CHOICES = [
    ('PB', 'Public'),
    ('PR', 'Private'),
    ('MN', 'Mentorship')
]

class Session(models.Model):
    slug = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    topic = models.CharField(max_length=200)

    type = models.CharField(max_length=2, choices=TYPE_CHOICES, default='PB')

    start_time = models.DateTimeField(null=True, default=None)
    end_time = models.DateTimeField(null=True, default=None)

    limit = models.IntegerField(default=0)
    participants = models.BigIntegerField(default=0)

    tags = ArrayField(models.CharField(max_length=100))

    taken_by = models.ForeignKey(User, null=True, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return self.topic


class Feedback(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    param1 = models.IntegerField()
    param2 = models.IntegerField()
    param3 = models.IntegerField()

    def __str__(self):
        return f"{self.by.email}_{self.of.topic}"


class Report(models.Model):
    rating = models.DecimalField(decimal_places=5, max_digits=10)
    of = models.ForeignKey(Session, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.of.topic}"


class AgoraToken(models.Model):
    token = models.CharField(max_length=2000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

    def __ser__(self):
        return f"{self.user.name}_{self.session.topic}"
