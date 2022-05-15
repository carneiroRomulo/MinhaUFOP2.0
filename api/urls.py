from django.urls import path
from .Auth import AuthView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [    
    path('auth/register', AuthView.RegisterView.as_view(), name='Register'),
    path('auth/login/', AuthView.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/change_password/<int:pk>/', AuthView.ChangePasswordView.as_view(), name='auth_change_password'),
    path('auth/update_profile/<int:pk>/', AuthView.UpdateProfileView.as_view(), name='auth_update_profile'),
]

