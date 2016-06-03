# Ionic MS LocalStorage Module
###### Menu module for [Ionic module structure app](https://github.com/DabitNG/ionic-ms-starter)

### Features
This module provides a localstorage service to your Ionic MS app.

### Installing module
1. `git clone https://github.com/DabitNG/ionic-ms-localstorage-module`
2. Extract and place local-storage folder into www/modules.
2. Go to module-injector.js file under www/modules/main and add `local-storage` dependency.
3. (If not ussing Gulp) Add the following scrips after module-injector.js in your index.tml

  ```
  <script src="modules/local-storage/module.js"></script>
  <script src="modules/local-storage/js/feed-reader.srvc.js"></script>
  ```
  
### Usage
Inject `LocalStorage` to your controller. This service provides some functions:
- `LocalStorage.set(key, value)`: Save value by key.
- `LocalStorage.get(key, defaultValue)`: Returns a value by key. If not defaultValue provided, returns `''`
- `LocalStorage.setObject(key, value)`: Save an object by key.
- `LocalStorage.getObject(key, defaultValue)`: Returns an object by key. If not defaultValue provided, returns `{}`

### Test results

```
[17:45:18] Starting 'test'...
[06 2016 17:45:18.970:INFO [karma]: [Karma v0.13.22 server started at http://localhost:9876/
[06 2016 17:45:18.976:INFO [launcher]: [Starting browser PhantomJS
[06 2016 17:45:20.451:INFO [PhantomJS 2.1.1]: [Connected on socket /#swkZH0nxrduPjXeDAAAA with id 9877453
PhantomJS 2.1.1: Executed 0 of 6 SUCCESS (0 secs / 0 secs)
[2KPhantomJS 2.1.1: Executed 1 of 6 SUCCESS (0 secs / 0.012 secs)
[2KPhantomJS 2.1.1: Executed 2 of 6 SUCCESS (0 secs / 0.013 secs)
[2KPhantomJS 2.1.1: Executed 3 of 6 SUCCESS (0 secs / 0.014 secs)
[2KPhantomJS 2.1.1: Executed 4 of 6 SUCCESS (0 secs / 0.015 secs)
[2KPhantomJS 2.1.1: Executed 5 of 6 SUCCESS (0 secs / 0.016 secs)
[2KPhantomJS 2.1.1: Executed 6 of 6 SUCCESS (0 secs / 0.017 secs)
[2KPhantomJS 2.1.1: Executed 6 of 6 SUCCESS (0.016 secs / 0.017 secs)
[17:45:20] Finished 'test' after 1.7 s

```

### Support or Contact
Having trouble with this module? Contact with [autor](https://github.com/DabitNG)
