# 🎄🔥 Spicy Advent Calendar

A beautifully designed interactive advent calendar with daily surprises from December 1-24. Features two modes: **Single Mode** (self-love and personal exploration) and **Partner Mode** (romantic activities for couples).

## ✨ Features

- **Two Modes**: Choose between Solo adventures or Partner experiences
- **Heat Levels**: Select mild 🔥🔥, medium 🔥🔥🔥, or hot 🔥🔥🔥🔥 intensity
- **Three Content Types**:
  - 📝 Assignments - Creative tasks to complete
  - 📖 Story Prompts - Writing inspiration
  - 💕 Romantic Suggestions - Activities to try
  - 🎲 Dice Days - Random activity and location combinations
- **Progress Tracking**: Automatically saves which doors you've opened
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Date-Aware**: Only unlocks doors on or after their corresponding dates

## 🌐 Web Version

Simply open `www/index.html` in any modern web browser!

### Hosting Online

You can host this on:
- **GitHub Pages**: Fork the repo and enable GitHub Pages
- **Netlify**: Drag and drop the `www` folder
- **Vercel**: Deploy directly from GitHub

## 📱 Android APK Build Instructions

### Prerequisites

1. **Node.js and npm**: Download from [nodejs.org](https://nodejs.org/)
2. **Java Development Kit (JDK)**: Download JDK 11 or higher
3. **Android Studio**: Download from [developer.android.com](https://developer.android.com/studio)
4. **Gradle**: Usually comes with Android Studio

### Environment Setup

1. **Set Environment Variables** (add to your system PATH):
   ```bash
   JAVA_HOME=/path/to/jdk
   ANDROID_HOME=/path/to/Android/Sdk
   ```

2. **Install Cordova globally**:
   ```bash
   npm install -g cordova
   ```

### Building the APK

1. **Clone or download this repository**

2. **Navigate to the project directory**:
   ```bash
   cd spicy-advent-calendar
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Add Android platform**:
   ```bash
   cordova platform add android
   ```

5. **Build the APK**:
   
   For debug version (testing):
   ```bash
   cordova build android
   ```
   
   For release version (app stores):
   ```bash
   cordova build android --release
   ```

6. **Find your APK**:
   - Debug: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
   - Release: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`

### Testing the APK

1. **Enable USB Debugging** on your Android device
2. **Connect your device** via USB
3. **Run**:
   ```bash
   cordova run android
   ```

## 🎨 Customization

### Modify Content

Edit `www/js/content.js` to change:
- Daily prompts and activities
- Dice roll options
- Heat levels

### Change Styling

Edit `www/css/style.css` to customize:
- Colors and gradients
- Fonts and sizes
- Animations and transitions

### App Details

Edit `config.xml` to change:
- App name and description
- App ID (widget id)
- Version number
- Author information
- Icons (add your own to `res/icon/android/`)

## 📋 Project Structure

```
spicy-advent-calendar/
├── www/                    # Web app files
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── style.css      # Styles
│   └── js/
│       ├── app.js         # App logic
│       └── content.js     # Calendar content
├── config.xml             # Cordova configuration
├── package.json           # Node dependencies
└── README.md             # This file
```

## 🚀 Publishing to Google Play Store

1. **Sign your APK**:
   ```bash
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk my-key-alias
   
   zipalign -v 4 app-release-unsigned.apk SpicyAdvent.apk
   ```

2. **Create a Google Play Developer account** ($25 one-time fee)

3. **Create a new application** in the Google Play Console

4. **Upload your signed APK** and complete the store listing

5. **Submit for review**

## 🔧 Troubleshooting

### Common Issues

**"cordova: command not found"**
- Make sure you installed Cordova globally: `npm install -g cordova`

**"ANDROID_HOME not set"**
- Set the environment variable to your Android SDK location

**"Build failed"**
- Make sure you have JDK 11+ installed
- Ensure Android Studio SDK tools are installed
- Try: `cordova clean` then rebuild

**Doors not unlocking**
- Check your device date is set correctly
- Calendar only unlocks doors Dec 1-24

## 📄 License

MIT License - feel free to modify and share!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new content ideas
- Improve the design
- Fix bugs
- Add features

## ⚠️ Content Warning

This app contains adult themes and is intended for mature audiences (18+).

## 💖 Acknowledgments

Created with love for romantic adventures and personal growth during the holiday season.

---

**Enjoy your December surprises!** 🎁✨
