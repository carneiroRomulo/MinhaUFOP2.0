from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .Auth import AuthView
from .Cardapio import CardapioView

urlpatterns = [    
    path('auth/register', AuthView.RegisterView.as_view(), name='Register'),
    path('auth/login/', AuthView.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/change_password/<int:pk>/', AuthView.ChangePasswordView.as_view(), name='auth_change_password'),
    path('auth/update_profile/<int:pk>/', AuthView.UpdateProfileView.as_view(), name='auth_update_profile'),
    
    path('cardapio/', CardapioView.CardapioList.as_view(), name='Cardapio List'),
    path('cardapio/<int:pk>/', CardapioView.CardapioDetail.as_view(), name='Cardapio Detail'),
]

