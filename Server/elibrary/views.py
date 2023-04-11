from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from django.db.models import Q
from .models import Resource
from .serializers import ResourceSerializer

# Create your views here.


class ViewResources(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        if slug=='all':
            queryset = Resource.objects.all()
        else:
            queryset = Resource.objects.filter(Q(tags__contains=slug)).all()

        serializer = ResourceSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UploadResource(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, slug):
        tags = request.data.get('tags').split(',')
