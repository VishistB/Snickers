from django.contrib import admin
from import_export.resources import ModelResource
from import_export.admin import ImportExportModelAdmin

from .models import User

# Register your models here.

class UserResource(ModelResource):
    
    class Meta:
        model = User
        fields = ('email', 'name', 'phone_no', 'dob', 'gender', 'is_verified', 'is_moderator')
        export_order = ('email', 'name', 'phone_no', 'dob', 'gender', 'is_verified', 'is_moderator')


class UserModelAdmin(ImportExportModelAdmin):
    resource_class = UserResource

    list_display = ('email', 'name', 'phone_no', 'is_verified', 'is_moderator')
    list_display_links = ('email', 'name', )
    list_filter = ('is_verified', 'is_moderator')
    list_per_page = 100
    search_fields = ('email', 'name', 'phone_no')

admin.site.register(User, UserModelAdmin)
