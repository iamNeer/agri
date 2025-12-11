from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

@api_view(['POST'])
def contact_submit(request):
    serializer = ContactSubmissionSerializer(data=request.data)
    if serializer.is_valid():
        submission = serializer.save()
        return Response({
            'success': True,
            'message': "Thank you for your message! We'll get back to you soon.",
            'id': str(submission.id)
        }, status=status.HTTP_201_CREATED)
    
    errors = []
    for field, messages in serializer.errors.items():
        for message in messages:
            errors.append(f"{field}: {message}")
    
    return Response({
        'success': False,
        'message': '; '.join(errors)
    }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def contact_submissions(request):
    submissions = ContactSubmission.objects.all()
    serializer = ContactSubmissionSerializer(submissions, many=True)
    return Response(serializer.data)
