from django.db import models
from Exam.models import Exam 

# Create your models here.

class Course(models.Model):
    name=models.CharField(max_length=200)
    description=models.TextField()
    c_type=models.CharField(max_length=100)

class College(models.Model):
    name=models.CharField(max_length=200)
    description=models.TextField()
    expenses=models.IntegerField()
    entrance_exam=models.ForeignKey(Exam,related_name='colleges',on_delete='models.CASCADE')
    courses=models.ManyToManyField(Course,related_name='offering_colleges')


class Links(models.Model):
    link=models.TextField(default=None)
    related_exams=models.ManyToManyField(Exam,related_name='links')
    related_colleges=models.ManyToManyField(College,related_name='links')