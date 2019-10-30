# FriendFinder_App

For: George Washington Coding Bootcamp
Developer: Richard Nulanz
Deployment Date 10/29/19
Built With Node.js, Javascript, JQuery, Express


Express Homework.

The Friend Finder app will find you the perfect friend. Answer the questions and your answers will be calculated against other users answers. Once the calculations is completed you will be matched to the friend with the closest anvers to yours.

Install:

Package.json
Command Line: 'npm init -y'

Express: A fast and minimalist web framework for node.
Command Line: 'npm install express'

Directories: 

  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
            -Holds the array of friends objects.
      - public
        - home.html
            -Initial Landing page when app is launched
        - survey.html
            -The survey and jquery that will that will link the information from our /api/friends link to match the user with a friend.
      - routing
        - apiRoutes.js
            - Uses GET to get the friend data as a json object. Uses POST to work through the compatibility calculations, where it returns the best match.
                -Determine the user's most compatible friend using the following as a guide:
                    -Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
                        -Example:
                            User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
                            User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
                            Total Difference: 2 + 1 + 2 = 5
        - htmlRoutes.js
            A GET Route to /survey which should display the survey page. A default, catch-all route that leads to home.html which displays the home page
    - node_modules
    - package.json
    - server.js
        -Listens to a port Nd requires the two routes.

Links:
















