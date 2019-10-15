import django_filters
from .models import Course,College
from django_filters import rest_framework as filters

class CourseFilter(django_filters.FilterSet):
    
    class Meta:
        model=Course
        fields = {
            'name': ['contains'],
            'c_type':['contains'],          
        }


class CollegeFilter(django_filters.FilterSet):
    
    class Meta:
        model=College
        fields = {
            'name': ['contains'],
            'expenses':['range'],
        }


