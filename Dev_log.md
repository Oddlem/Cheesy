#### DEV LOG

1. Installed express using `npm install express`
2. Initialize package using `npm init -y`
3. Implemented folder scaffolding (resources, services, middleware, schema, dao, utils)
4. Added db.js, used for setting up tables
5. Set up new container in docker using postgres
    1. Changed docker-compose to fit current database
    2. Deleted old container (pgvector in user-validation-api)
    3. Created the new container using docker-compose up -d
    4. Checked the information was correct using `docker ps`
6. Ran `node db.js` to create the new table
7. In DBeaver, created a new connection to this container
8. Created the following, in the following order: app.js, resource layer, service layer, dao layer
9. Implemented 