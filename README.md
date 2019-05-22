# INFO30005-Web-Information-Technologies-Project


### Project Live URL:
https://ezpark-project.herokuapp.com/


### Data We Use:
https://data.melbourne.vic.gov.au/Transport-Movement/On-street-Parking-Bay-Sensors/vh2v-4nfs <br>
We use the data provided from MelbourneData, this is a realtime data updated every 2 minutes.

### Team Name: 
EZPark

### Team Member:
Lachlan Scholes <br>
Yinglan Huang <br>
Yu Min Oung <br>
Dongwei Wei <br>
Ziyi Li <br>

### Project Description:
This is a web application to help drivers to find available street parking slot in Melbourne CBD.

### Key Functions:
1. Search your target location or address and get the car park places near it.
2. Register yourself with email address.
3. Login for more personalized functions. 

### Code Features:
- Views:
  - 404.pug
  - carpark.pug
  - favorites.pug
  - index.pug
  - login.pug
  - signup.pug
  - todo_list.pug
  - userprofile.pug
- Routes:
  - routes.js
- Controllers:
  - carpark.js
  - favorites.js
  - home.js
  - login.js
  - search.js
  - signup.js
  - userprofile.js
- Models:
  - db.js
  - favourites.js
  - search.js

### Initial Setup:
to setup the project in your local machine for the first time.
```
git clone https://github.com/yuminoung/EZPark.git
npm install
```

### Before you code:
run git pull to make sure you have the latest version of the project.
```
git pull
npm install
```

### To upload changes:
```
git add your_file_name 
//OR 
git add .


git commit -m 'your message'
git push
```

### How to run project in local machine:
After pulling or cloning, run these commands
```
//Step 1: install all required dependencies, this command will create node_modules folder
npm install

//Step 2: run npm run dev, this is a script i added to package.json, this script will run nodemon app.js
npm run dev

//step 3: go to http://localhost:3000/ to view the applcation.

```


### Enjoy coding :)
