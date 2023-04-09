from django.urls import path
from . import views

urlpatterns = [
    path('view/<slug:slug>/', views.SessionView.as_view()),
    path('schedule/', views.ScheduleSession.as_view()),
    path('generate-token/<slug:session>/', views.GenerateToken.as_view())
]
