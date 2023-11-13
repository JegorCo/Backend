from rest_framework import serializers
from datetime import datetime
from .models import User

class ItemSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(default=datetime.now())
    updated_at = serializers.DateTimeField(default=datetime.now())
    class Meta:
        model = User
        # fields = '__all__'
        fields = ('id','image', 'name_surname', 'gender', 'birth_date', 'telegram', 'phone_number', 'about')

