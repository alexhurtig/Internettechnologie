from collections.__main__ import p
import webbrowser
from django.http import HttpResponse
from django.shortcuts import render_to_response


def hello(request):
    return HttpResponse('Hello World!')

def home(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\home.html')

def mobileRate(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\mobileRate.html')

def TVrate(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\TVrate.html')

def booksRate(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\\booksRate.html')

def mobileView(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\mobileView.html')

def TVview(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\TVview.html')

def booksView(request):
    return render_to_response('C:\Program Files\Code\Internettechnologie\worthit\pagefiles\\booksView.html')