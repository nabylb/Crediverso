
#!/usr/bin/env bash
set -e

function sedi {
  if [ "$(uname)" == "Linux" ]; then
    sed -i "$@"
  else
    sed -i "" "$@"
  fi
}

ios_version_number_old=`sed -n '/MARKETING_VERSION/{s/MARKETING_VERSION = //;s/;//;s/^[[:space:]]*//;p;q;}' ./ios/Motusi.xcodeproj/project.pbxproj`
ios_build_number_old=`sed -n '/CURRENT_PROJECT_VERSION/{s/CURRENT_PROJECT_VERSION = //;s/;//;s/^[[:space:]]*//;p;q;}' ./ios/Motusi.xcodeproj/project.pbxproj`

cd ios; xcrun agvtool next-version > /dev/null; cd -

ios_version_number=`sed -n '/MARKETING_VERSION/{s/MARKETING_VERSION = //;s/;//;s/^[[:space:]]*//;p;q;}' ./ios/Motusi.xcodeproj/project.pbxproj`
ios_build_number=`sed -n '/CURRENT_PROJECT_VERSION/{s/CURRENT_PROJECT_VERSION = //;s/;//;s/^[[:space:]]*//;p;q;}' ./ios/Motusi.xcodeproj/project.pbxproj`

echo "iOS Version moved from $ios_version_number_old($ios_build_number_old) to $ios_version_number($ios_build_number)" 

android_version_number_old=`sed -n '/versionName/{s/versionName//;s/;//;s/"//g;s/^[[:space:]]*//;p;q;}' ./android/app/build.gradle`
android_build_number_old=`sed -n '/versionCode/{s/versionCode//;s/;//;s/^[[:space:]]*//;p;q;}' ./android/app/build.gradle`

new_android_buil_number=`expr $android_build_number_old + 1`

sedi 's/versionCode [0-9a-zA-Z -_]*/versionCode '$new_android_buil_number'/' ./android/app/build.gradle

android_version_number=`sed -n '/versionName/{s/versionName//;s/;//;s/"//g;s/^[[:space:]]*//;p;q;}' ./android/app/build.gradle`
android_build_number=`sed -n '/versionCode/{s/versionCode//;s/;//;s/^[[:space:]]*//;p;q;}' ./android/app/build.gradle`

echo "Android Version moved from: $android_version_number_old($android_build_number_old) -> $android_version_number($android_build_number)"


