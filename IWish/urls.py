from django.urls import path
from IWish import views

urlpatterns = [
    path("", views.home, name="home"),
    path("index", views.index,name="index"),
]