# Lecture:

## Installing Node
https://docs.google.com/presentation/d/16yDwIH8np-tQL85g4bpmrsDfO8LaW38jr-fMQirLnoQ/edit#slide=id.g10f06da46b0_0_11

- download node
    - https://nodejs.org/en/
    - reboot after install
    - node --version
- cd project folder
- npm init (with authorized shell)
    ```
    npm init
    ```
    it will make package.json


- hello.js
    Execute it in cmd bash(not powershell)
    ```
    node hello.js
    ```

- expressjs
    Execute it in the project folder.
    ```
    npm install express
    ```

- server.js
    ```
    node server.js
    ```

    http://localhost:4000/hello

## Creating react app
in the root folder...
```
npm create vite@latest
```
-> it will install the package for first time

- name project: kambaz-react-web-app
- Select React
- Select TypeScript

- running a react app
    ```
    cd kanbas-react-web-app
    npm install
    npm run dev
    ```