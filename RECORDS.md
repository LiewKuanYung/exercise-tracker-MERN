# Important Records

## Frontend
1. Basically nothing much, most concepts is the same
2. A dynamic routing library used, called (react-router-dom)[https://reactrouter.com/core/guides/philosophy]. It is diff from static routing, because dynamic routing takes place as your app is rendering and static routing can't or hard do that.
3.

## Backend
1. Init backend folder
```
powershell> md backend
powershell> npm init
powershell> npm install express cors mongoose dotenv
powershell> npm install -g nodemon
```
- express: a lightweight web framework
- cors: cross origin resource sharing
- mongoose: to make dev with node.js and mongoodb smoother
- dotenv: for environment
- nodemon: auto restart node.js, it will restart server

2. Run server using `nodemon server`
- An issue about connecting to mongoose, invalid password or bad auth. The solution can be found [here](https://docs.atlas.mongodb.com/troubleshoot-connection/#special-characters-in-connection-string-password)

3.
