from agora_token_builder import RtcTokenBuilder
from datetime import datetime
from django.conf import settings
from datetime import timezone

from .models import AgoraToken

def createToken(session, user):
    channelName = str(session.slug)
    uid = session.participants + 1
    
    session.participants += 1
    session.save()

    if session.taken_by==user:
        role = 1
    else:
        role = 0
    privilegeExpiresTs = (session.end_time-datetime(1970,1,1, tzinfo=timezone.utc)).total_seconds() + 300

    token = RtcTokenBuilder.buildTokenWithUid(settings.AGORA_APP_ID, settings.AGORA_CERTIFICATE, channelName, uid, role, privilegeExpiresTs)
    
    instance = AgoraToken(token=token, session=session, user=user)
    instance.save()

    return {
        'uid': uid,
        'token': token,
    }
