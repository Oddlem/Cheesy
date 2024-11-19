### Running the app
-For the backend, start the server with `node app.js`
-For the frontend, use `cd frontend-jokes` and then `npm run dev`

### Description
A service which ingests different types of jokes from different sources, both external and internal. The user can create an account and can view/submit their own jokes through a visual interface.

### Database
Using Postgres as a database management system, three databases are utilized for separate functions; one for storing jokes, another for storing user information, and a third for storing user tokens.

### Components
* Client
    * react.js https://react.dev/ 
    * bulma CSS https://bulma.io/ 
* REST API
    * node express https://expressjs.com/ 
    * node.js https://nodejs.org/en 
    * body-parser https://www.npmjs.com/package/body-parser 
    * Joi https://www.npmjs.com/package/joi 
    * uuid https://www.npmjs.com/package/uuid 
    * bcrypt https://www.npmjs.com/package/bcrypt

* User authentication
    * jsonwebtoken https://www.npmjs.com/package/jsonwebtoken 
    * dotenv https://www.npmjs.com/package/dotenv 
    * uuid https://www.npmjs.com/package/uuid

* Data Engineering
    * axios https://www.npmjs.com/package/axios  
    * Data sources:
        * https://api-ninjas.com/api/dadjokes
        * https://rapidapi.com/KegenGuyll/api/dad-jokes/playground/
        * apiendpoint_8a3669ee-772f-42a8-a92c-6ffc33e3152d
        * https://rapidapi.com/KegenGuyll/api/dad-jokes
* Database
    * postgres https://www.npmjs.com/package/pg 

### Data flows

![yay diagram fullstack jokes](https://github.com/user-attachments/assets/a839026d-d5d1-421f-a591-cc7fa09373f5)
