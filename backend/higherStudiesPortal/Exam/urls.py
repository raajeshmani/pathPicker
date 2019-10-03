from django.urls import path
from .views import ExamViewSet,CoachingCenterViewSet
from rest_framework.routers import SimpleRouter


router=SimpleRouter()
router.register('exam',ExamViewSet)
router.register('center',CoachingCenterViewSet)
print(router.urls)

urlpatterns = router.urls
