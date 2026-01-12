# Admin Image Management Guide

## Overview
The admin can now **upload images directly from their phone** (camera or gallery) just like posting on Facebook or Twitter! No need for URLs anymore.

## How to Access (Admin Only)

1. **Login** as admin (israelezrakisakye@gmail.com)
2. **Open Menu** (tap the menu icon in the top-left)
3. **Scroll down** to "Admin Tools" section
4. **Tap "Manage Images"** button

## What You Can Change

### Carousel Images (3 slides)
- **Slide 1**: Main hero image with JB'S TAILORED branding
- **Slide 2**: Locations slide showing shop locations
- **Slide 3**: Delivery slide promoting nationwide delivery

### Branch Location Images (2 images)
- **Ntinda Branch**: Image of Ntinda shop location
- **Mbarara Branch**: Image of Mbarara shop location

### Article Images (5 images)
- **Tailoring Article**: Bespoke tailoring image
- **Fabrics Article**: Suit fabrics image
- **Wedding Article**: Wedding attire image
- **Professional Article**: Professional wardrobe image
- **Care Article**: Garment care image

## How to Upload Images 📸

### Option 1: Take a New Photo
1. Tap the **"Choose/Take Photo"** button
2. Select **"Camera"** or **"Take Photo"**
3. Take your photo
4. Confirm/crop if needed
5. The image uploads automatically!

### Option 2: Choose from Gallery
1. Tap the **"Choose/Take Photo"** button
2. Select **"Gallery"** or **"Photo Library"**
3. Browse and select your image
4. The image uploads automatically!

### Finishing Up
- After uploading all desired images, tap **"Save Changes"**
- Your images are now live on the website!

## Where Images Are Saved

- **Firebase Storage**: Uploaded images are stored securely in the cloud
- **Firebase Firestore**: Image URLs are saved for quick access
- **localStorage**: Cached locally for instant loading
- Changes are **permanent** and sync across all devices

## Image Requirements

✅ **File Types**: JPG, PNG, WEBP, GIF
✅ **Max Size**: 5MB per image
✅ **Recommended Size**: At least 800x800 pixels for best quality
✅ **Orientation**: Landscape works best for carousel/branches

## Tips for Great Photos

📷 **Good Lighting**: Take photos in bright, natural light
📷 **Clean Background**: Avoid cluttered backgrounds
📷 **High Resolution**: Use your phone's best camera quality
📷 **Steady Hands**: Hold phone steady or use a tripod
📷 **Horizontal Photos**: Work best for carousel and branch images

## Features

🎯 **Instant Preview**: See your image immediately after upload
🎯 **Progress Feedback**: Toast notifications show upload status
🎯 **Error Handling**: Alerts if image is too large or wrong format
🎯 **Mobile Optimized**: Works perfectly on all phones
🎯 **Camera Access**: Can take photos directly from the app

## Troubleshooting

**Upload Failed?**
- Check your internet connection
- Make sure image is under 5MB
- Try a different image format (JPG works best)
- Ensure you're logged in as admin

**Image Not Showing?**
- Wait a few seconds for upload to complete
- Refresh the page
- Check if you tapped "Save Changes"

**Camera Not Working?**
- Allow camera permissions in your browser
- Try using "Choose from Gallery" instead
- Check if another app is using the camera

**Image Too Large?**
- Compress the image using a photo editor
- Take a new photo at lower resolution
- Use online tools like TinyPNG to reduce size

## Example Workflow

1. **Open Admin Panel** → Menu → Manage Images
2. **Tap "Choose/Take Photo"** for Slide 1
3. **Take a photo** of your shop front
4. **See preview** appear automatically
5. **Repeat** for other images as needed
6. **Tap "Save Changes"** when done
7. **Done!** Images are live on the website

---

**Need help?** Contact support via WhatsApp or call the shop directly.

## Technical Details (For Developers)

- Uses Firebase Storage for image hosting
- Generates unique filenames with timestamps
- Supports `capture="environment"` for direct camera access
- Falls back to base64 encoding if Firebase unavailable
- Validates file type and size before upload
- Shows real-time upload progress
- Implements proper error handling
