from rest_framework import serializers
from .models import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    firstName = serializers.CharField(source='first_name', min_length=1)
    lastName = serializers.CharField(source='last_name', min_length=1)
    
    class Meta:
        model = ContactSubmission
        fields = ['id', 'firstName', 'lastName', 'email', 'message', 'submitted_at']
        read_only_fields = ['id', 'submitted_at']

    def validate_message(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters")
        return value
