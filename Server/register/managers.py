from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    """
    Custom User Manager to use email as unique identifier
    """

    def create_user(self, email, name, phone_no, dob, password=None):
        if not email:
            raise ValueError("Email required")

        user = self.model(
            email=email,
            name=name,
            phone_no=phone_no,
            dob=dob,
        )
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone_no, dob, password=None):
        user = self.create_user(email=email, name=name, phone_no=phone_no, dob=dob, password=password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user
