from django.db import models

class Users(models.Model):
    name = models.CharField('Имя',max_length=35)
    surname = models.CharField('Фамилия',max_length=35)
    email = models.EmailField('Почта')
    password = models.CharField('Пароль', max_length=50)
    reppassword = models.CharField('Повтор Пароля', max_length=50)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'