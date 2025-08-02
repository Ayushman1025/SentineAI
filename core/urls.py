from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),                  # /
    path('threats/', views.threat_list, name='threats') # /api/threats/
]
