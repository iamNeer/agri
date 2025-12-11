from django.urls import path
from . import views

urlpatterns = [
    path('contact', views.contact_submit, name='contact_submit'),
    path('contact/submissions', views.contact_submissions, name='contact_submissions'),
]
