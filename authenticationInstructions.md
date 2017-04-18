# Auth0
In terminal (root of project):  npm install

## Check to see if authentication works
launch app:  react-native run-ios
  -If it works, then disregard steps below
  -If it does not work, then continue with steps below

## Auth0 for iOS

For any errors or to see where the instructions came from, refer to:  https://auth0.com/docs/quickstart/native/react-native-ios/01-login

1. Install cocoapods (depending on your permissions, you might have to use sudo)
  -In terminal:  gem install cocoapods

2.  Link react-native-lock with iOS project
  -In terminal:  react-native link react-native-lock

3.  Create a file "auth0-credentials.js" in root folder
  -Ask team for credentials

## Auth0 for Android

Refer to: https://manage.auth0.com/#/clients/JwSWZ4UNnNnP2bYZWvIFSKr5dolJVOmg/quickstart

1.  Install rnpm (dependig on your permissions, you might have to use sudo)
  -In terminal:  npm install rnpm -g

2.  Link react-native-lock with Android project
  -In terminal: rnpm link react-native-lock
