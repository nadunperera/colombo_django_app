from django.shortcuts import render


def dashboard(request):
    return render(request, 'colombo_app/dashboard.html')


def users(request):
    return render(request, 'colombo_app/users.html')


def projects(request):
    return render(request, 'colombo_app/projects.html')


def events(request):
    return render(request, 'colombo_app/events.html')


def funnels(request):
    return render(request, 'colombo_app/funnels.html')


def eois(request):
    return render(request, 'colombo_app/eois.html')


def invoices(request):
    return render(request, 'colombo_app/invoices.html')
