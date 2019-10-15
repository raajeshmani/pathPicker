from django.shortcuts import render
from rest_framework import viewsets,status,generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django_filters import rest_framework as filters

from .serializers import (CollegeSerializer,CourseSerializer,UserSerializer)
from .models import (College,Course)
from .filters import (CourseFilter,CollegeFilter)

# Create your views here.

class CollegeViewSet(viewsets.ModelViewSet):
    serializer_class = CollegeSerializer
    queryset = College.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CollegeFilter
    
    # def get_queryset(self):


class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CourseFilter
    # def get_queryset(self):

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)