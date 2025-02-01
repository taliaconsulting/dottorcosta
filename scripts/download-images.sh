#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download placeholder images
curl -o public/doctor-portrait.jpg https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800
curl -o public/doctor-office.jpg https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800

# Download hero background image
curl -o public/hero-bg.jpg "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1920&q=80"

echo "Images downloaded successfully!" 