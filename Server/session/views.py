from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Session, AgoraToken, Feedback
from .serializers import SessionSerializer

from .agora_tokens import createToken
from datetime import datetime

# Create your views here.


class SessionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        if slug=='public':
            key = 'PB'
        elif slug=='mentorship':
            key = 'MD'
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        queryset = Session.objects.filter(type=key)
        serializer = SessionSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ScheduleSession(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        topic = request.data.get('topic')
        type = request.data.get('type')
        tags = request.data.get('tags').split(',')
        start_time = request.data.get('start_time')
        end_time = request.data.get('end_time')
        limit = request.data.get('limit')
        taken_by = request.user

        if type=='private':
            type = 'PR'
        else:
            type = 'MN'

        try:
            instance = Session(topic=topic, tags=tags, type=type, start_time=start_time, end_time=end_time, limit=limit, taken_by=taken_by)
            instance.save()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_201_CREATED)


class GenerateToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, session):
        user = request.user
        session = Session.objects.filter(slug=session).first()

        if session is None or datetime.now()>session.end_time or datetime.now()<session.start_time:
            return Response({'error': 'Invalid session slug!'}, status=status.HTTP_400_BAD_REQUEST)

        temp = AgoraToken.objects.filter(session=session, user=user).first()

        if temp is not None:
            return Response({
                'uid': temp.uid,
                'token': temp.token
            }, status=status.HTTP_200_OK)

        return Response(createToken(session, user), status=status.HTTP_200_OK)


class FeedbackForm(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        session_slug = request.data.get('slug')
        session = Session.objects.filter(slug=session_slug).first()

        user = request.user

        if session is None:
            return Response({"error": "Invalid Session slug!"}, status=status.HTTP_400_BAD_REQUEST)

        if Feedback(user=user, session=session).exists():
            return Response({'error': 'Already filled!'}, status=status.HTTP_400_BAD_REQUEST)
    
        try:
            instance = Feedback(session=session, user=user, param1=request.get('param1'), param2=request.get('param2'), param3=request.get('param3'))
            instance.save()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        return Response(status=status.HTTP_201_CREATED)
