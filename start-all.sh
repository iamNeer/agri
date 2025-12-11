#!/bin/bash

# Start Django backend in background
cd django_backend && python manage.py runserver 0.0.0.0:8000 &
DJANGO_PID=$!

# Wait a bit for Django to start
sleep 2

# Start Node.js server (Vite + Express on port 5000)
cd ..
npm run dev

# If npm exits, also kill Django
kill $DJANGO_PID 2>/dev/null
