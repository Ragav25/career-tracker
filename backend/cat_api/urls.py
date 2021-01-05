from django.urls import path
from cat_api.views import PostList, PostDetail

app_name = 'cat_api'

urlpatterns = [
    path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('', PostList.as_view(), name='listcreate'),
]