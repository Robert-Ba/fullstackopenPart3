# Part 3 
To start: ```npm run dev```
Online backend: https://fullstackopenpartthree.fly.dev/info

## Exercises 3.1 - 3.6
https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-1-3-6

## Exercises 3.7 - 3.8
https://fullstackopen.com/en/part3/node_js_and_express#exercises-3-7-3-8

## Exercises 3.9 - 3.11
https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11

### 3.9
The client folder is the modified version of the phonebook project from Part 2.
- Updated base URL for api calls
- Added proxy to vite config so that calls to /api go to port 3001
- Added client folder to .dockerignore so it doesn't deploy to fly.io

### 3.10
I deployed the backend to fly.io using port 3000 and added VS Code REST files for testing the endpoints on the fly.io cloud service. (./requests/production)
Online application: https://fullstackopenpartthree.fly.dev/info

### 3.11
Updated scripts in package.json to support npm run deploy:full command. This will create a dist folder for the UI that express will server as a static file.