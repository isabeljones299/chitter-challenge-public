Chitter Challenge
=================

My first full stack app! Not fully tested or deployed but I will hopefully get the chance to come back to this and add some additional features that I missed out. I also want to become more knowledgeable on front end testing as I found that very tricky in this challenge.


Todo list during development:
- username added to register, login and peeps posted by that person (no two usernames can be the same -> alert on registration) (x)
- README should indicate the technologies used, and give instructions on how to install and run the tests. (x)
- fully tested front end!! (not done)
- edit peep functionality (not done)
- encripted password (x)
- change all alerts to conditional rendering/otherwise (not done)
- only asks you to login once until you log out (x)
- profile page showing your own peeps (not done)
- deploy app and update readme to give instructions on how to install and run the tests. (not done)
- extended criteria - see below (not done)


## How to use

- Fork and clone the repository into a code editor
- navigate to the back-end and create .env.dev and .env.test files containing 
- `HOST = 127.0.0.1` (both)
- `PORT = 5000` (both)
- `MONGODB_URL = <database url>` (.env.dev only)
- `MONGODB_URL = <testdatabase url>` (.env.test only)
- the database must be running in mongoDB and contain empty collections `peeps` and `users`


- In the terminal:
- `npm i` then
- `npm test` to run tests
- `npm start` to see the app in the browser 


Below are the instructions I received to start the challenge.

Challenge:
-------

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
