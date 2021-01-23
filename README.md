# Lab auth

## Iteration 1

- User validation & registration (user controller)
- Password hashing (user model)

## Iteration 2

- Express session configuration (session.config & app.js)
- Login user checking password and storing the user id at the session (routes, user controller)
- Load session user if necessary and store it at res.locals and req (app.js)
- Render login|register or user email at navbar (narbar.hbs)
- Logout (routes, user controller)

## Iteration 3

- Restrict /users path only for auth users (routes & secure middleware)

## Iteration 4

- passport (to be continued...)
