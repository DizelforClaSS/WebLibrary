from .models import Users
from django.forms import  ModelForm,TextInput,EmailInput,PasswordInput
from  django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django import  forms


class UsersForm(ModelForm):
    class Meta:
        model = Users
        fields = ['name','surname','email','password', 'reppassword']

        widgets = {
            "name": TextInput(attrs={
                'placeholder': 'Введите имя',
                'id': 'fname',
            }),

            "surname": TextInput(attrs={
                'placeholder': 'Введите фамилию',
                'id': 'LastName',
            }),

            "email": EmailInput(attrs={
                'placeholder': 'Введите почту',
                'id': 'email',
            }),

            "password": PasswordInput(attrs={
                'placeholder': 'Введите пароль',
                'id': 'password',
            }),

            "reppassword": PasswordInput(attrs={
                'placeholder': 'Повторите пароль',
                'id': 'password2',
            })

        }

class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Почта",
                               widget=forms.EmailInput (attrs={
                                   'placeholder': "Введите почту",
                                   'id': 'log_email'
                               }))
    password = forms.CharField(label="Пароль",
                               widget=forms.PasswordInput(attrs={
                                'placeholder': 'Введите пароль',
                                'id': 'password',
                                }))