from rest_framework import serializers
from .models import Session

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('topic', 'slug', 'start_time', 'end_time', 'limit', 'tags')

