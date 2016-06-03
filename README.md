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

### Support or Contact
Having trouble with this module? Contact with [autor](https://github.com/DabitNG)
