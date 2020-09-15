# Web APIs: Code-Quiz

This is a timed quiz with multiple choice questions. This app features HTML and CSS that is dynamically updated by the JavaScript code. It has a responsive design that adapts to various screen sizes.

## Overview

* Quiz design consists of: `index.html`, `style.css`, `script.js`, and `JSquestions.js`.
* Bootstrap 4 was utilized to create the layout

## Quiz Description

* Press `Start` to initiate the quiz
    * Timer starts to count down
    * User selects an answer from a set of multiple choices
        * Correct answers are valued at 5pts.
        * Incorrect answers will decrease the timer by 5 seconds
    * Game Over Conditions:
        * Timer reaches `0`
        * User answers all the questions
    * After a Game Over condition is met the User is allowed to enter their name, which is then stored.

* Select `Scores` to view stored scores at any time
* Select `CLear` to delete locally stored scores

## Bonus Features

* Three selectable sets of questions: `JavaScript`, `CSS`, `Donuts`
* Stored users are assigned a `Badge` that is based on which quiz the user took

### Screenshots

![Quiz main menu](/images/screen1.png)
![Quiz question](/images/screen2.png)
![Quiz name entry](/images/screen3.png)
![Quiz scores](/images/screen4.png)