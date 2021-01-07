# from django.shortcuts import render
from rest_framework import generics
from cat.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import ( SAFE_METHODS, IsAuthenticatedOrReadOnly, 
                                        BasePermission, IsAdminUser, DjangoModelPermissions,
                                        DjangoModelPermissionsOrAnonReadOnly, IsAuthenticated )


class PostUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return False

        return obj.author == request.user

class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    # queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):

        user = self.request.user
        return Post.objects.filter(author=user)



class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

