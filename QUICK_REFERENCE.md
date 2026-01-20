# 🎯 Quick Reference: Cloudinary + Firestore

## Where Things Are Stored

| Item | Storage | Example |
|------|---------|---------|
| **Product Images** | Cloudinary | `https://res.cloudinary.com/dvfuk2fzp/...` |
| **Carousel Images** | Cloudinary | `https://res.cloudinary.com/dvfuk2fzp/...` |
| **Branch Images** | Cloudinary | `https://res.cloudinary.com/dvfuk2fzp/...` |
| **Article Images** | Cloudinary | `https://res.cloudinary.com/dvfuk2fzp/...` |
| **Product Data** | Firestore | `{ name, price, image: cloudinary_url }` |
| **Orders** | Firestore | `{ userId, items, status }` |
| **Users** | Firestore | `{ email, name, createdAt }` |
| **Messages** | Firestore | `{ text, timestamp, isAdmin }` |

---

## Cloudinary Config

```javascript
Cloud Name: dvfuk2fzp
Upload Preset: jbs-tailored-unsigned
Folder: jbs-tailored
```

**Dashboard:** https://cloudinary.com/console

---

## Firestore Config

```javascript
Project ID: jb-s-72a95
Collections:
  - products
  - orders
  - users
  - settings
```

**Console:** https://console.firebase.google.com

---

## Upload Flow

```
User Selects Image
      ↓
Upload to Cloudinary
      ↓
Get Cloudinary URL
      ↓
Save URL to Firestore
      ↓
Display from Cloudinary CDN
```

---

## Key Functions

### Upload Product Image
```javascript
handleProductImageUpload(event)
// Uploads to: jbs-tailored/products/
```

### Upload Site Image
```javascript
handleImageUpload(event, category, key)
// Uploads to: jbs-tailored/{category}/
```

### Save Product
```javascript
saveProduct(event)
// Saves to: Firestore > products
```

### Save Site Images
```javascript
saveAdminImages()
// Saves to: Firestore > settings/siteImages
```

---

## Admin Access

**Email:** `israelezrakisakye@gmail.com`

**Features:**
- Manage Products
- Manage Site Images
- View All Orders
- Chat with Customers

---

## Testing Checklist

- [ ] Login as admin
- [ ] Upload product image → Check Cloudinary
- [ ] Save product → Check Firestore
- [ ] Upload carousel image → Check Cloudinary
- [ ] Save site images → Check Firestore
- [ ] Verify images display correctly
- [ ] Check browser console for errors

---

## Troubleshooting

**Image not uploading?**
- Check upload preset is "unsigned"
- Verify file size < 5MB
- Check internet connection

**Image not displaying?**
- Verify Cloudinary URL is correct
- Check browser console
- Try accessing URL directly

**Firestore not saving?**
- Check authentication
- Verify Firestore rules
- Check browser console

---

## 🎉 You're All Set!

Images → Cloudinary ☁️
Data → Firestore 🔥

Everything is configured and ready to use!
