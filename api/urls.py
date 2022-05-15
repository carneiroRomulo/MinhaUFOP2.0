from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .Auth import AuthView
from .Menu import MenuView
from .Building import BuildingView
from .Department import DepartmentView
from .Subject import SubjectView

urlpatterns = [    
    path('auth/register', AuthView.RegisterView.as_view(), name='Register'),
    path('auth/login/', AuthView.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/change_password/<int:pk>/', AuthView.ChangePasswordView.as_view(), name='auth_change_password'),
    path('auth/update_profile/<int:pk>/', AuthView.UpdateProfileView.as_view(), name='auth_update_profile'),
    
    path('menu/', MenuView.MenuList.as_view(), name='Menu List'),
    path('menu/<int:pk>/', MenuView.MenuDetail.as_view(), name='Menu Detail'),
    
    path('building/', BuildingView.BuildingList.as_view(), name='Building List'),
    path('building/<int:pk>/', BuildingView.BuildingDetail.as_view(), name='Building Detail'),
    
    path('department/', DepartmentView.DepartmentList.as_view(), name='Department List'),
    path('department/<int:pk>/', DepartmentView.DepartmentDetail.as_view(), name='Department Detail'),
    
    path('subject/', SubjectView.SubjectList.as_view(), name='Subject List'),
    path('subject/<int:pk>/', SubjectView.SubjectDetail.as_view(), name='Subject Detail'),
]

