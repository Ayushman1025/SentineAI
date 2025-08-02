from django.contrib import admin
from django.urls import path, include
from core import views  # import views directly for home

urlpatterns = [
    path('', views.home, name='home'),                 # /
    path('api/', include('core.urls')),                # /api/threats/
    path('admin/', admin.site.urls),
]
