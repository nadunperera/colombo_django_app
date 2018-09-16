from django.shortcuts import render


def dashboard(request):
    return render(request, 'dashboard.html')


def reminders(request):
    return render(request, 'reminders.html')


def users(request):
    return render(request, 'users.html')


def projects(request):
    return render(request, 'projects.html')


def events(request):
    return render(request, 'events.html')


def funnels(request):
    return render(request, 'funnels.html')


def eois(request):
    return render(request, 'eois.html')


def invoices(request):
    return render(request, 'invoices.html')
