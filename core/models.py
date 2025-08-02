from django.db import models

class Threat(models.Model):
    threat_type = models.CharField(max_length=100)
    severity = models.IntegerField()
    location = models.CharField(max_length=200)
    reported_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.threat_type} - {self.severity}"

