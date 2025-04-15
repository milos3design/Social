from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from .views import get_user_profle_data

urlpatterns = [
    path('user_data/<str:pk>/', get_user_profle_data)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)