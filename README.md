# Github-issues-model-Nodejs
Github issues model with all the CRUD operations using NodeJs, Express and Mysql


# DB config

- `/config/db.js` you can update the DB credential here

# Setting Up

- Clone the repo
- install the dependencies
- Run `node scripts/issuestable` to create tables in the DB

- `npm start` in the root directory to run the backend server on PORT 3000

- `npm start` in the /frontend directory. watch on '/api'


- `npm test` to run testcases in backend server (or ) you can use postman



## Routes

- GET `/api/list-issues` to return all the issues in paged manner of 10 per page(Filter and sortings - `/api/list-issues?page=`,`/api/list-issues?show=open`, `/api/list-issues?page=2&show=closed` ) 

- POST `/api/add-issue` To add an issue

- PATCH `/api/update-issue/:id` To update issue by ID

- DELETE `/api/delete-issue/:id` To delete issue by ID


## Note
 
- ** Pagination, Filter and sorting**  Still need to connect with the frontend


