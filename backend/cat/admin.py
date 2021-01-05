from django.contrib import admin
from . import models

@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id', 'company_name', 'role', 'status',
                    'date_applied', 'job_description',
                    'job_link', 'interview_date', 'author'
                    )
    prepopulated_fields = {'slug': ('company_name',), }

# admin.site.register(models.Post)
