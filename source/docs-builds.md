layout: docs
title: builds
---
## Building with Reapp

Building with Reapp is simple and powerful. We offer custom configs,
and let you target as many platforms as you want.

### How to build

The syntax for building looks like this:

```
reapp build [platform] [options]
```

Where your platform is a single word. By default, `reapp build` will set
the platform to `web`. Options are:

```
-d, --debug  output extra information for debugging
--no-assets  only build the js
--no-js      only build the assets
```

### Output

Running a build will place your app into the `./build/[platform]` folder,
where the default platform is web. Run `reapp build ios` and your files
will be built to `./build/ios`.

This separation means you can run multiple builds at the same time and
they wont affect each other.

Builds also handle assets for you in a well-defined way. Lets look at an
example assets folder:

```
/assets
  /ios
    index.html
    /images
      icon.png
  /web
    index.html
    firebase.json
  /shared
    Procfile
```

In this example we have set up our app for `ios` and `web` builds. When
our build runs it will use Webpack to compile all the assets, and then it
will look into `./assets` and copy them over to the build directory. Say
we ran `reapp build ios`, we'd get this in our `./build/ios` folder:

```
index.html
main.js
main.css
Procfile
/images
  icon.png
```

Notice how the assets from our folders are copied over. Our `shared` folder
copies over no matter what platform first, followed by anything in the platform
sub-directory in assets.

### Cordova

Using Reapp with Cordova is incredibly easy. Here's our steps for setting
up a workflow that lets you build to XCode in one step:

1. Install cordova cli
2. `cordova new appname`
3. Adjust config.xml to your liking
4. `cordova platform add ios`
5. Some plugins we use:
  - com.telerik.plugins.wkwebview 0.3.5 "WKWebView Polyfill"
  - org.apache.cordova.console 0.2.13 "Console"
  - org.apache.cordova.device 0.3.0 "Device"
  - org.apache.cordova.inappbrowser 0.6.0 "InAppBrowser"
  - org.apache.cordova.statusbar 0.1.10 "StatusBar
6. In your cordova app:
  - `rm -r www`
  - `ln -s ../PATH_TO_REAPP_APP/build/ios www`
7. In your reapp app:
  - Build for ios: `reapp build ios && (cd ~/PATH_TO_YOUR_CORDOVA_APP && cordova prepare)`
8. Open the .xcodeproj in Xcode (it's in your platforms folder)
9. Build using xcode
10. That's it

From now you on you run the command from step 7 and it will automatically
build and prepare for XCode.

Extra reading:

 - WKWebView
   - cordova plugin add https://github.com/Telerik-Verified-Plugins/WKWebView
   - [Remove push notifications iOS8](http://stackoverflow.com/questions/25017933/cordova-how-to-remove-push-notification-on-ios)
 - [statusTap](https://github.com/triceam/cordova-statusTap)
 - [iTunes screenshots](http://stackoverflow.com/questions/25756863/full-resolution-screenshots-for-iphone-6-and-6)_
 - [iOS8 scroll events change](http://developer.telerik.com/featured/scroll-event-change-ios-8-big-deal/)