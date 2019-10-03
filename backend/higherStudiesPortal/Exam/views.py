from django.shortcuts import render
from rest_framework import viewsets,status,generics

from .serializers import (ExamSerializer,CoachingCenterSerializer)
from .models import (Exam,CoachingCenter)

# Create your views here.

class ExamViewSet(viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    queryset = Exam.objects.all()
    
    # def get_queryset(self):


class CoachingCenterViewSet(viewsets.ModelViewSet):
    serializer_class = CoachingCenterSerializer
    queryset = CoachingCenter.objects.all()
    # def get_queryset(self):
