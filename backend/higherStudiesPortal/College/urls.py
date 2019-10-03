from django.urls import path
from .views import CollegeViewSet,CourseViewSet,UserCreateAPIView
from rest_framework.routers import SimpleRouter
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here


router=SimpleRouter()
router.register('college',CollegeViewSet)
router.register('course',CourseViewSet)
print(router.urls)
    

router.urls.append(path('api-token-auth/', obtain_auth_token, name='api_token_auth'))
router.urls.append(path('register/', UserCreateAPIView.as_view()))

urlpatterns = router.urls
