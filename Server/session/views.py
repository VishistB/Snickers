from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Session, AgoraToken
from .serializers import SessionSerializer

from .agora_tokens import createToken

# Create your views here.


class SessionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        if slug=='public':
            key = 'PB'
        elif slug=='moderator':
            key = 'MD'
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        queryset = Session.objects.filter(type=key)
        serializer = SessionSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(request):
        topic = request.data.get('topic')
        tags = request.data.get('tags')
        start_time = request.data.get('start_time')
        end_time = request.data.get('end_time')
        limit = request.data.get('limit')
        taken_by = request.user

        instance = Session(topic=topic, tags=tags, start_time=start_time, end_time=end_time, limit=limit, taken_by=taken_by)
        instance.save()

        return Response(status=status.HTTP_200_OK)


class GenerateToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, session):
        user = request.user
        session = Session.objects.filter(slug=session).first()

        if session is None:
            return Response({'error': 'Invalid session slug!'}, status=status.HTTP_400_BAD_REQUEST)

        temp = AgoraToken.objects.filter(session=session, user=user).first()

        if temp is not None:
            return Response({
                'uid': temp.uid,
                'token': temp.token
            }, status=status.HTTP_200_OK)

        return Response(createToken(session, user), status=status.HTTP_200_OK)
