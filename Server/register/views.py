from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate
from .models import IdImage, User

from . import validate_professional, validate_student

# Create your views here.


class IdUpload(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        file = request.data.get('id_proof')
        designation = request.data.get('designation')

        key = 'ST' if designation=='student' else 'CP'

        instance = IdImage(file=file, designation=key)
        instance.save()

        file_name = instance.file.name
        
        try:
            if key=='ST':
                list = validate_student.validate(file_name)
            else:
                list = validate_professional.validate(file_name)
        except:
            return Response({'error': 'Something went wrong!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        instance.name = list['Name']
        if key=='ST':
            instance.university = list['University']
        else:
            instance.company = list['Company']
        
        return Response({
            'id': instance.id,
        }, status=status.HTTP_200_OK)


class Register(APIView):

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')
        name = request.data.get('name')
        phone_no = request.data.get('phone_no')
        country = request.data.get('country')
        gender = request.data.get('gender')
        id_image = request.data.get('image_id')
        company = request.data.get('company')
        university = request.data.get('university')

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already registered!'}, status=status.HTTP_400_BAD_REQUEST)

        id_instance = IdImage.objects.filter(id=id_image).first()

        if id_instance is None or id_instance.name!=name or (id_instance.company!=company and id_instance.university!=university):
            return Response({'error': 'Verification failed!'}, status=status.HTTP_400_BAD_REQUEST)

        user = User(email=email, password=password, name=name, phone_no=phone_no, country=country, gender=gender, id_image=id_image)

        user.set_password(password)
        user.save()

        return Response(status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is None:
            return Response({"error": 'Invalid Credentials!'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            token = Token.objects.get(user=user)
            token.delete()
        except:
            pass

        token = Token.objects.get_or_create(user=user)
        return Response({
            'token': token[0].key,
        }, status=status.HTTP_200_OK)
