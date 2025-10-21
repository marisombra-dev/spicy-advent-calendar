# Quick Start Guide 🚀

## Just Want to Use It? (Web Version)

1. Open `www/index.html` in your browser
2. Choose your mode (Single or Partner)
3. Click on unlocked days (December 1-24)
4. Enjoy! 🎉

## Want to Build an Android App?

### Super Quick Setup (5 minutes)

1. **Install Node.js**: [Download here](https://nodejs.org/)

2. **Open Terminal/Command Prompt** and run:
   ```bash
   npm install -g cordova
   ```

3. **Navigate to project folder**:
   ```bash
   cd spicy-advent-calendar
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Add Android**:
   ```bash
   cordova platform add android
   ```

6. **Build APK**:
   ```bash
   cordova build android
   ```

7. **Find your APK** at:
   `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### Prerequisites Checklist

Before building Android APK, you need:

- ✅ **Node.js** - [Download](https://nodejs.org/)
- ✅ **JDK 11+** - [Download](https://adoptium.net/)
- ✅ **Android Studio** - [Download](https://developer.android.com/studio)
  - During setup, install Android SDK
  - Note the SDK location (you'll need it)

### Set Environment Variables

**Windows**:
```
ANDROID_HOME = C:\Users\YourName\AppData\Local\Android\Sdk
JAVA_HOME = C:\Program Files\Java\jdk-11
```

**Mac/Linux**:
```bash
export ANDROID_HOME=/Users/YourName/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
```

## Testing on Your Phone

1. Enable **Developer Options** on your Android phone
2. Enable **USB Debugging**
3. Connect phone via USB
4. Run:
   ```bash
   cordova run android
   ```

## Publishing to GitHub

1. Create a new repository on GitHub
2. In your terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/spicy-advent-calendar.git
   git push -u origin main
   ```

## Common Issues

**"cordova: command not found"**
→ Run: `npm install -g cordova`

**"ANDROID_HOME not set"**
→ Set the environment variable (see above)

**Can't find JDK**
→ Make sure JAVA_HOME is set correctly

**Build fails**
→ Try: `cordova clean` then rebuild

## Need More Help?

Check the full README.md for detailed instructions!

---

**That's it! You're ready to build! 🎊**
