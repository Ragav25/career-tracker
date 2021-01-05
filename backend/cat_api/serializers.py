from rest_framework import serializers
from cat.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'company_name', 'role', 'status',
                    'date_applied', 'job_description',
                    'job_link', 'interview_date',
                    #Should remove it before final update
                    'author'
                    ) 