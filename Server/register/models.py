from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .managers import UserManager

# Create your models here.


DESIGNATION_CHOICES = [
    ('ST', 'Student'),
    ('CP', 'Company')
]

class IdImage(models.Model):
    file = models.ImageField(upload_to='id')
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=2, choices=DESIGNATION_CHOICES)
    company = models.CharField(default='')
    university = models.CharField(default='')


class User(AbstractBaseUser):

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150)
    phone_no = models.CharField(max_length=15)
    gender = models.CharField(max_length=50)
    dob = models.DateField(auto_now=False, auto_now_add=False)

    id_image = models.OneToOneField(IdImage, on_delete=models.CASCADE, null=True, blank=True, default=None)

    is_verified = models.BooleanField(default=False)    #True if user is verified to upload resources and create sessions
    is_moderator = models.BooleanField(default=False)   #True if a moderator

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['name','phone_no', 'dob']

    def get_short_name(self):
        # The user is identified by their email
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    
    def __str__(self):
        return self.email

