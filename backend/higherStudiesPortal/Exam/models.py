from django.db import models

# Create your models here.
class CoachingCenter(models.Model):
    name=models.CharField(max_length=200)
    location=models.CharField(max_length=200)
    contact_no=models.CharField(max_length=12)

class Exam(models.Model):
    name=models.CharField(max_length=200)
    date=models.DateField(auto_now_add=True)
    coaching_centers=models.ManyToManyField(CoachingCenter,related_name='entrance_exams')
