# 📱 PHONE UPLOAD DIAGNOSTIC GUIDE

## 🎯 We WILL Fix This!

Since you're not giving up, let's solve why the images break on your phone.

### 🛑 Possible Causes & Solutions

#### 1. "Image looks broken"
*   **Cause**: The URL getting saved contains a "cache bust" parameter (`?t=...`) which Firebase effectively rejects after a while, OR the filename has spaces/symbols.
*   **Your Fix**: I implemented **Filename Sanitizer** and **Permission Checker** in the code.
    *   *Action*: Refresh your app on the phone now. Try uploading 1 new image.
    *   *Check*: If you see a "Warning" alert, it's a **Permissions** issue in Firebase Console.

#### 2. "Not there when I come back"
*   **Cause**: Persistence failure. Your phone browser might be clearing `localStorage` aggressively, OR the Firestore sync is overwriting your local data with "empty" data.
*   **Your Fix**: I added safeguards to `saveProduct` to force save to local storage.
    *   *Action*: Do NOT use "Private" or "Incognito" tabs. They delete data when closed.

### 🔭 Debugging Steps (On Phone)

1.  **Open Chrome/Safari** (Normal mode, not private).
2.  **Login** as Admin.
3.  **Add Product**:
    *   Upload Image.
    *   WAIT for `✅ verification` message.
    *   Save.
4.  **Don't close**. Refresh the page immediately.
    *   Is it there?
    *   If NO: The `localStorage` is not working (Full memory?).
    *   If YES: Good.

### 🔑 Critical Check: Firebase Rules

If the image upload says "Success" but shows as broken immediately:

**You MUST check Firebase Console > Storage > Rules**
It should be:
```
allow read: if true;
```
If it is `allow read: if request.auth != null;`, then:
*   Admin sees it (logged in).
*   Customer (or you after logout) sees BROKEN image.

Since you experienced "looks broken", this is the #1 suspect.
