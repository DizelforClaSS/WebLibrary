from django.shortcuts import render, HttpResponse, redirect
from .models import Users
from  .forms import UsersForm, LoginForm
from django.contrib.auth import login, logout
from  django.contrib import messages
# Create your views here. Контроллер


def index(request):
    return render(request, 'main/index.html')


def audio(request):
    return render(request, 'main/AudioBooks.html')


def auth(request):
    return HttpResponse(f'<h1>Дороу, ебан, авторизацию делай\n\n </h1>')

def user_login(request):
    if request.method =='POST':
        form=LoginForm(data=request.POST)
        if form.is_valid():
            messages.success(request,"Вы вошли")
            user=form.get_user()
            login(request, user)

    else:
        form= LoginForm()
    return render(request, 'main/MyProfile.html', {"form": form})

def Esenin(request):
    return  render(request, 'АвторыСтихов/Esenin.html')

def EseninBM(request):
    return  render(request, 'Есенин/ЧерныйЧеловек.html')

def EseninLastPoet(request):
    return  render(request,'Есенин/ЯПоследнийпоэтдеревни.html')

def Registration(request):
    error = ''
    if request.method == 'POST':
        form = UsersForm(request.POST)
        if form.is_valid():
            form.save()
            '''Наборы запросов Django защищены от SQL-инъекций, поскольку их запросы построены с использованием параметризации запросов.
             Код SQL запроса определяется отдельно от параметров запроса. Поскольку параметры могут быть предоставлены пользователем и, 
             следовательно, небезопасны, они экранируются базовым драйвером базы данных.'''
            return redirect('/')
        else:
            error='Форма была неверна'
    form = UsersForm()

    data = {
        'form': form,
        'error': error
    }
    return  render(request, 'main/Registration.html', data)

# def create(request):
#     form=UsersForm()
#
#     data = {
#         'form': form
#     }
#
#     return render(request,'main/Registration.html', data)