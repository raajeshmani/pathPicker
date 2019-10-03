from django.shortcuts import render
from rest_framework import viewsets,status,generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

from .serializers import (CollegeSerializer,CourseSerializer,UserSerializer)
from .models import (College,Course)

# Create your views here.

class CollegeViewSet(viewsets.ModelViewSet):
    serializer_class = CollegeSerializer
    queryset = College.objects.all()
    
    # def get_queryset(self):


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    # def get_queryset(self):

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)