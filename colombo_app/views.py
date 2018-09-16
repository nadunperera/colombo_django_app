from django.shortcuts import render


def dashboard(request):
    return render(request, 'dashboard.html')


def user(request):
    return render(request, 'user.html')


def user_new(request):
    return render(request, 'user_new.html')
