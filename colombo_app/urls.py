from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='colombo-dashboard'),
    path('reminders/', views.reminders, name='colombo-reminders'),
    path('users/', views.users, name='colombo-users'),
    path('projects/', views.projects, name='colombo-projects'),
    path('events/', views.events, name='colombo-events'),
    path('funnels/', views.funnels, name='colombo-funnels'),
    path('eois/', views.eois, name='colombo-eois'),
    path('invoices/', views.invoices, name='colombo-invoices'),
]
