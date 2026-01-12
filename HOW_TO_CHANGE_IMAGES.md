# HOW TO CHANGE WEBSITE IMAGES

## Quick Guide

All website images are now controlled from **ONE LOCATION** in the code!

### Location: Line 186-209 in index.html

Look for the `siteImages` object:

```javascript
const siteImages = {
    // Carousel Images
    carousel: {
        slide1: 'YOUR_IMAGE_URL_HERE',
        slide2: 'YOUR_IMAGE_URL_HERE',
        slide3: 'YOUR_IMAGE_URL_HERE'
    },
    // Branch Location Images
    branches: {
        ntinda: 'YOUR_IMAGE_URL_HERE',
        mbarara: 'YOUR_IMAGE_URL_HERE'
    },
    // Article Images
    articles: {
        tailoring: 'YOUR_IMAGE_URL_HERE',
        fabrics: 'YOUR_IMAGE_URL_HERE',
        wedding: 'YOUR_IMAGE_URL_HERE',
        professional: 'YOUR_IMAGE_URL_HERE',
        care: 'YOUR_IMAGE_URL_HERE'
    }
};
```

## How to Change Images

1. **Open** `index.html`
2. **Find** line 186 (search for "siteImages")
3. **Replace** the URLs with your own image URLs
4. **Save** the file
5. **Commit** to GitHub

## What Each Image Controls

### Carousel (Homepage Slider)
- `slide1` - Main JB'S TAILORED showcase slide
- `slide2` - Shop locations slide
- `slide3` - Delivery service slide

### Branches (Location Photos)
- `ntinda` - Ntinda branch photo
- `mbarara` - Mbarara branch photo

### Articles (Blog/Info Section)
- `tailoring` - "The Art of Bespoke Tailoring" article
- `fabrics` - "Understanding Suit Fabrics" article
- `wedding` - "Wedding Attire: Groom's Guide" article
- `professional` - "Professional Wardrobe Essentials" article
- `care` - "Caring for Your Tailored Garments" article

## Tips

✅ Use high-quality images (800x400px or larger)
✅ Make sure URLs are publicly accessible
✅ Test URLs in your browser before adding them
✅ Use HTTPS URLs for security
✅ Clear browser cache after changes (Ctrl+F5)

## After Making Changes

1. Save the file
2. Commit to GitHub:
   ```
   git add index.html
   git commit -m "Update website images"
   git push
   ```
3. Clear your browser cache and refresh

---

**All images will update automatically when you change the URLs in the siteImages object!**
