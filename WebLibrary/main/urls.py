from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index),
    path('audio', audio),
    path('user', user_login),
    path('АвторыСтихов/Esenin', Esenin),
    path('Есенин/EseninBM',EseninBM),
    path('Есенин/ЯПоследнийПоэтДеревени',EseninLastPoet),
    path('Registration',Registration),
]