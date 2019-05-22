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

### Core functionality
1. User can search a location, a map will show up to show a list of nearest carparks.
2. User can sign up or register, this will save their recent search. (this is still underconstruction will complete by final deliverable)
3. Popular search count will show in the home page, this show the highest search location by all user.

### Routes
1. GET /signin - show signin page, will direct user to home if signed in
2. GET /signup - show signup page, will direct user to home if signed in
3. GET /user - show userprofile page, will direct user to home page if not signed in
4. GET / - show home page and show top 10 popular search locations
5. GET /404 - show 404 if page not exists
6. GET /signout - log user out

7. POST /search - save search to mongodb increase search count, use for popular search
8. POST /signin - post user credentials to server and validate, sign user in if success
9. POST /signup - post user sign up details to server and save it in mongodb (unique email and password match valiation)
10. GET /search/result - show a map of user searched location



### Enjoy coding :)
