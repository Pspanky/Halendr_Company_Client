# Project Name

Our project is called "lyfeontrack" and is intended to help users track the metrics of their day-to-day
overall well-being.
Our webapp will prompt users with bi-daily questionaries,
where they can record information about their food, sleep, exercise and/or mental health state for the day.
As this information is recorded over time, Lyfeontrack will chart the metrics of each day,
which the user can then use to explore how their habits change over time.
Ultimately,
we hope this app can be used to gain a deeper understanding of one's
habits, and how one can try to change them to lead a better life.

## Architecture

The webapp will have 3 main components: Charts, surveys, and setting.
Once the user has logged into their account, the homepage will display a chart of their data from previous days.
If they have not filled out a survey for the day, the homepage will also display a survey for the user to record their
metrics for that day.
There will also be a page where the user can fill out an additional survey for the day, to provide
more data for their charts, and finally there will be a settings page where the user can customize the questions/metrics
they want to be asked each day.

We will be using the following tools and libraries for our webapp:

-React
-Express
-Redux
-MongoDB
-Mongoose
-Passport
-Chart.js

React will be used for the construction of the site.
Redux will be used in combination with MongoDB and Mongoose in order to
send the recorded information of each day to a database in the form of schemas.
Chart.js will be used to chart this data when it is fetched from our database.
Passport will be used for user authentication.


## Setup

We will pull a starter pack from SA6 so that we have a starterpack that has redux, and where
we can easily implement a router. After that, we will install all the tools and libraries we intend
to use (with npm), and then establish the route to our three different main pages of our webapp.
From that point, we'll want to make sure we are able to send information to our database when we
fill out surveys, and then make sure we are able to change our surveys using the settings page.
Finally, we will then make sure that we are able to retrieve said data and chart it on our home page.

## Deployment

http://steep-spot.surge.sh/

## Authors

Elaine Chiu,
Mahnoor Maqsood,
Paul Spangfort,
Sachin Vadodaria,
Drew Waterman

## Acknowledgments

Tim
