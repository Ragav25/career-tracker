from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

STATUS_CHOICES = [
    ('pending', 'Pending'),
    ('interviewing', 'Interviewing'),
    ('not-selected', 'Not-Selected'),
    ('selected', 'Selected')
]

STARRED_CHOICES = [
    ('important', 'Important'),
    ('not-important', 'Not-Important'),
]

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self, request):
            return super().get_queryset() .filter(author=request.user)


    company_name = models.CharField(max_length=255)
    role = models.CharField(max_length=250)
    status = models.CharField(
        max_length=100, choices=STATUS_CHOICES, default='pending')
    date_applied = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length=250, unique_for_date='post_created')
    post_created = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE)
    starred = models.CharField(
        max_length=20, choices=STARRED_CHOICES, default='not-important')
    job_description = models.TextField(null=True, blank=True)
    job_link = models.URLField(max_length=255, null=True, blank=True)
    interview_date = models.DateTimeField(null=True, blank=True)
    objects = models.Manager() # default manager
    postObjects = PostObjects() # custom manager

    class Meta:
        ordering = ('-post_created',)

    def __str__(self):
        return self.company
    
    
