#!/bin/bash

SLUG=$1

if [ -z "$SLUG" ]; then
  echo "Usage: ./scripts/send-onboarding.sh <slug>"
  exit 1
fi

BASE_URL="http://localhost:3000"

echo "Envoi de l'email de confirmation de publication..."
RES1=$(curl -s -X POST "$BASE_URL/api/send-publish-confirmation" \
  -H "Content-Type: application/json" \
  -d "{\"companySlug\": \"$SLUG\"}")
echo "send-publish-confirmation: $RES1"

echo "Envoi de l'email QR code..."
RES2=$(curl -s -X POST "$BASE_URL/api/send-qr" \
  -H "Content-Type: application/json" \
  -d "{\"companySlug\": \"$SLUG\"}")
echo "send-qr: $RES2"
