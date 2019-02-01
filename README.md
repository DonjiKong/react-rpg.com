# RPG made with React + Redux
Turn-based, Dungeon-crawling RPG made with the finest web technologies! [Play the latest version here!](http://react-rpg.com)

# Get Started Locally!
## Install
```
git clone https://github.com/ASteinheiser/react-rpg.com
cd react-rpg.com
yarn install
```
## Develop Locally
```
yarn start
```
## Run Tests
```
yarn test
```

# TODO:
- [ ] release tablet support for android and iOS
- [ ] screenshots for Android and iOS tablets
- [ ] replace purchase confirm screen with item view sort of dialog
- [ ] add popup on non-native version for downloading the app from the app store
  - [ ] android https://play.google.com/store/apps/details?id=com.reactrpgnative
  - [ ] ios https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1450907766&mt=8
- [ ] make redux store for dialog manager
  - [ ] move dialogs into this folder
- [ ] turn game menus into a "feature"
  - [ ] bring game music and game settings under this folder
- [ ] look into making map padding walls have explored values
- [ ] swipe and hold for continuous movement in that direction
- [ ] improved instructions screen depending on device instead of query param
  - [ ] use text to explain swipe and double tap
