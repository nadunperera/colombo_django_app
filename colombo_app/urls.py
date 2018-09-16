from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='colombo_dashboard'),
    path('user/', views.user, name='colombo_users'),
    path('user/new/', views.user_new, name='colombo_new_user'),
]
