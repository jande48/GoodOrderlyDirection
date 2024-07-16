To test in a local environment: npx expo start

To simulate the production environment: npx expo start --no-dev --minify AND npx expo start --no-dev --clear

It's very important to verify that all the Node packages work. If you have problems with the 'White Screen of Death' on the app store builds, then use the no-dev and clear keyword arguments and fix any expo packages with npx expo install --fix

### DEPLOYMENT
Make sure the app.json and eas.json mimic this project

to submit to the app store: MAKE SURE TO CHANGE THE NUMBER APP JSON 
eas login 
eas build --platform ios
eas submit --platform ios

To make sure this works in the app store(s), you need to install,

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


for a new project, you need eas-cli
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios
eas submit --platform ios