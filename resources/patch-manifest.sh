set -e
MANIFEST=android/app/src/main/AndroidManifest.xml
sed -i 's|<application|<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />\n    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="32" />\n    <application android:requestLegacyExternalStorage="true"|' "$MANIFEST"
grep -q requestLegacyExternalStorage "$MANIFEST"
