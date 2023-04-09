from django.apps import AppConfig


class SessionConfig(AppConfig):

    def ready(self) -> None:
        from jobs.sched import start
        start()
        return super().ready()
    
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'session'
