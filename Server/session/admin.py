from django.contrib import admin
from import_export.resources import ModelResource
from import_export.admin import ImportExportModelAdmin

from .models import Session, Feedback, Report, AgoraToken

# Register your models here.

class SessionResource(ModelResource):
    
    class Meta:
        model = Session
        fields = ('slug', 'type', 'topic', 'limit', 'start_time', 'end_time', 'tags')


class SessionModelAdmin(ImportExportModelAdmin):
    resource_class = SessionResource

    list_display = ('slug', 'type', 'topic', 'limit', 'start_time', 'end_time', 'tags')
    list_display_links = ('slug', )
    list_filter = ('type', )
    list_per_page = 100
    search_fields = ('slug', 'topic')


class FeedbackResource(ModelResource):
    
    class Meta:
        model = Feedback
        fields = ('id', 'session', 'user', 'param1', 'param2', 'param3')


class FeedbackModelAdmin(ImportExportModelAdmin):
    resource_class = FeedbackResource

    list_display = ('id', 'session', 'user', 'param1', 'param2', 'param3')
    list_per_page = 100


class ReportResource(ModelResource):
    
    class Meta:
        model = Report
        fields = ('id', 'points', 'of')


class ReportModelAdmin(ImportExportModelAdmin):
    resource_class = ReportResource

    list_display = ('id', 'rating', 'of')
    list_per_page = 100


class AgoraTokenResource(ModelResource):
    
    class Meta:
        model = AgoraToken
        fields = ('id', 'token', 'user', 'session')


class AgoraTokenModelAdmin(ImportExportModelAdmin):
    resource_class = AgoraTokenResource

    list_display = ('id', 'token', 'user', 'session')
    list_per_page = 100


admin.site.register(Session, SessionModelAdmin)
admin.site.register(Feedback, FeedbackModelAdmin)
admin.site.register(Report, ReportModelAdmin)
admin.site.register(AgoraToken, AgoraTokenModelAdmin)
