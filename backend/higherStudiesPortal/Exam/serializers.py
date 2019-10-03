from rest_framework import serializers
from .models import (Exam,CoachingCenter)

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields=['id','name','date','coaching_centers','colleges']
        depth=1

class CoachingCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachingCenter
        fields=['id','name','location','contact_no','entrance_exams']
        depth=1