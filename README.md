# TouchTube

Electron wrapper for the [YouTube for TV](https://www.youtube.com/tv) web app

## Usage

- Download the [latest release's .AppImage](https://github.com/redeven/touchtube/releases).

    - The .AppImage can be executed by double-clicking on most desktop environments
    - Alternatively you can make it executable (`sudo chmod +x TouchTube-*.AppImage`) and run it directly from CLI (`./TouchTube-*.AppImage`)
    - It can be integrated into the system through an utility like [GearLever](https://github.com/mijorus/gearlever)
    - Steam Deck: It can be added directly as a Non-Steam game and launched in Gaming Mode


## Building manually

```
git clone https://github.com/redeven/touchtube.git
```
```
cd touchtube
```
```
npm ci
```
```
npm run build
```

Built app be found in `./dist/TouchTube-*.AppImage`
