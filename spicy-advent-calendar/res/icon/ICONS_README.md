# App Icons Guide

## Icon Requirements for Android

You'll need to create icons in the following sizes and place them in `res/icon/android/`:

| Density | Size (px) | Filename |
|---------|-----------|----------|
| ldpi    | 36×36     | ldpi.png |
| mdpi    | 48×48     | mdpi.png |
| hdpi    | 72×72     | hdpi.png |
| xhdpi   | 96×96     | xhdpi.png |
| xxhdpi  | 144×144   | xxhdpi.png |
| xxxhdpi | 192×192   | xxxhdpi.png |

## Easy Icon Creation Options

### Option 1: Online Tools (Easiest)
1. Create a 1024×1024 icon design
2. Use [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
3. Upload your design
4. Download all sizes
5. Place in `res/icon/android/`

### Option 2: Design Apps
- **Canva**: Create square design, export at different sizes
- **GIMP**: Free image editor
- **Photoshop**: Professional option

### Option 3: Use a Template
Start with something simple:
- Gradient background (purple/pink from your app theme)
- Add emoji: 🎄🔥 or ❤️✨
- Add text: "Spicy Advent"

## Icon Design Tips

✅ **Do:**
- Use simple, recognizable imagery
- Keep text minimal or none
- Use contrasting colors
- Test at small sizes
- Consider app theme colors (#764ba2, #667eea)

❌ **Don't:**
- Use too much detail (gets lost at small sizes)
- Use copyrighted images
- Make it too complex

## Quick Placeholder

For testing, you can use emoji or solid colors as temporary icons until you create final ones.

## Testing Your Icons

After adding icons, rebuild:
```bash
cordova build android
```

Install on your device to see how they look!
