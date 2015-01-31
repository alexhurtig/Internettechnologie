from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext


def hello(request):
    return HttpResponse('Hello World!')

def home(request):
    return render_to_response('home.html')

def mobileRate(request):
    return render_to_response('mobileRate.html')

def TVrate(request):
    return render_to_response('TVrate.html')

def booksRate(request):
    return render_to_response('booksRate.html')

def mobileView(request):
    return render_to_response('mobileView.html')

def TVview(request):
    return render_to_response('TVview.html')

def booksView(request):
    return render_to_response('booksView.html')

def add_form_data(request):
    success = 'Your name is: ' + request.GET['vorname'] + request.GET['nachname']+'Your Email: '+request.GET['email']+'Your Category: '+request.GET['kategorie']+'Your note: '+request.GET['note']+'Your message: '+request.GET['beschreibung']
    return HttpResponse(success)
