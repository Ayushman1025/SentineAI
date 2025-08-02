from django.http import JsonResponse, HttpResponse
from .models import Threat

def threat_list(request):
    threats = Threat.objects.all().values()
    return JsonResponse(list(threats), safe=False)

def home(request):
    return HttpResponse("Welcome to SentineAI!")
