from django.urls import path
from django.views.generic import TemplateView

app_name = 'cat'

urlpatterns = [
    path('', TemplateView.as_view(template_name="cat/index.html")),
]