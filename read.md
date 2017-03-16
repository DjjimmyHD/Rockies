### Goals ###
 - At the core I want to be able to create a website that answers the simple question, "is there a rockies game today"
 - I want to be provide an easy to read answer to the question with maybe a few extra pieces of information
  - was there a game?
  - when is the next game?
  - when is the next home game?
  - what can I do in Denver before the game?
  - what can I do in Denver after the game?
  - are there other events happening before, during or after the game?
  - what is traffic like?
  - what is the light rail schedule?
  - is there relevant rockies news?
  - if I get there early do I get cool shit?
### Requirements ###
- Follow an agile workflow
  - Work with your product owner to define several strong agile user stories
  - Work with your product owner to come up with a few hand-drawn wireframes
  - Add your stories to your Pivotal Tracker project
- HTML
  - Make good use of semantic HTML tags
  - Be well-indented, validated, etc.
  - Include some embedded media (images, audio, video, canvas)
  - Optionally, use a templating engine
- CSS
  - Use a styling framework like Materialize or Bootstrap
  - Be well-indented and clean
  - Split code into separate files where appropriate
  - Responsive design optional but strongly encouraged
- JavaScript
  - DOM manipulation via JavaScript or jQuery
  - Integration with some external API via XHR or AJAX
  - Response to some user-initiated events
  - Well-indented, linted, and use excellent variable names
  - Split code into separate files where appropriate
  - Optionally, use a test-driven development approach
- User Input
  - Use at least one web form
  - Validate user input
  - Optionally, persist user data using something like LocalStorage
- Workflow
  - Use wireframes to create your layouts before you build them
  - Use a feature-branch workflow for your user stories
  - Optionally, do some build-tooling with something like Gulp
### CODE NOTES ###
- The api I am using gave me the code to get data I need now I need to start manipulating it
  - It came in long form and I am just going to leave it as is for now
  - I am going to change .done to .then and .fail to .catch
- I will start by seeing if I can just get the schedule for the whole 2017 season
- I have the schedule and I changed the .done and .fail
- The schedule is being logged as data with [2430] arrays
- I want to build a loop to sort through all rockies games then separate those by rockies home games vs rockies away games
  - Side note I am unsure if I can still call data after the ajax request but I am pretty sure using .then will allow me to do it with out returning
- colorado codes
  - AwayTeamID: 23
  - HomeTeamID: 23
  - AwayTeam: COL
  - HomeTeam: COL
  - StadiumID: 44
- Ok I was able to access the first object at index 0 and log it
- Now I want to create a loop that goes through and creates two separate arrays
  - one i want to sort by AwayTeam: COL
  - one I want to sort by HomeTeam: COL
- Got the loops working to sort out the home and away schedule
  - I sorted by stadiumID and AwayTeamID
- I annotated where the code is I think I am just going to comment out my console logs that way I know where they are and that the code was working on each step
- I dont want to just display all the scheduled home games, I want to have a way to when a button is clicked or when the page is loaded, I check the current day with the array of home games and then I pull out a few things
  - things I want to grab from the homeList
    - who the rockies are playing
    - what time the rockies are playing
- This will involve making editing my html so I am going to make my first commit here
///FIRST COMMIT///
- I am going to edit the index so I can start pushing the data to a web page
- Messed around the index so I can see how I am going to get the current date. It is a jquery function that just needs to be pieced together
- Going to make another commit so I can see what I did in case something breaks later on
///SECOND COMMIT///
- I going to leave the button for now but eventually get date will need to be a function so that I can compare it against the home schedule
- I am considering passing the get date function through both arrays and having another if/else statement that way we can display the times or future game
- "Status": "Scheduled",
- "Day": "2017-04-02T00:00:00"
- "DateTime": "2017-04-02T16:00:00"
- if current day === any day in home list array then execute a function for yes
  - Yes should display the time and the opponent
- else if find next game and display time and location and opponent
- Right now I am doing materialize and i just want to get the variables down for what I want to display and how it might look on the page
  - I have put a pin in styling for now and gone back to wire framing
  - I have a good idea of what variables I need and how I want the p-age to flow
- I am going to focus on getting the following variables, I can't decide if I think after I get each one I am going to test and then commit
SIDE NOTE FOR WHAT I WANT TO SHOW
      - if today's date matches a day in the home rockies schedule I want to display the time of the game and their opponent
      - if today's date matches a day in the away rockies schedule I want to display the time of the game and their opponent
      - if no matches I want to say no game
        - if the game is home I want to display it as home with day and time and opponent
        - if the game is away I want to display it as away with the day and time and opponent
- I am going to commit here because I have the loop basically running how I want. I have the syntax. Next I will work on figuring out how to display the next closest away or home game
///THIRD COMMIT///
- Just got done meeting with Brooks and as I suspected I need to turn everything into a function, finger crossed
//gotta be a better way to do this unsure how
            for (var i = 0; i < homeTime.length; i++) {
                if   (homeTime[i].Day === dateString) {
                    console.log(homeTime[i].DateTime, homeTime[i].AwayTeam)
                }
            for (var i = 0; i < awayTime.length; i++) {
                else if (awayTime[i].Day === dateString) {
                    console.log(awayTime[i].DateTime, awayTime[i].HomeTeam);
                }
            }   else {
                console.log("no game today");

            }
//if statement to run if the else runs
            if ()

            // console.log(homeTime[0].Day;
- So it is working but I had to substitue .Attendance for .day in my function because when I ran it I expected to get a console log of "no game today" but I didnt. On the plus side the function is working
- Going to try with .GameID to see if I can isolate one specific result
  - IT WORKED WHY DOESNT MY ELSE STATEMENT WORK GOD BLESS IT
  - game id works for home I am testing it with away to see if it is even making it to the else statement
    - ..... the away statement works WHY DOESNT MY ELSE LOG KAjhdkshFKJAHSDKJAHD
- Well I wasnt returning a value in my function so I am going to try and see if I can just make it an if, else if, else statement
- before I break things I am going to commit
///4TH COMMIT///
- Ok I got it working, I am going to commit lol
///5th COMMIT///
- time to start working on a way to get the specific data I want if my home or away matches the current date
- since there aren't games for a while I am using GameID to make sure away and home are running
    - GameID 47558 is away
    - GameId 47607 is home
- Displays the info I want if home is true
///6TH COMMIT///
- Going to try and get the values is away is true
///7th COMMIT///
- All three conditions work time to start working on formatting them and displaying them on the webpage
///8th COMMIT///
- Got the jquery to work, am fixing it to the home and away statement. Almost there
  - it works for no games
  - it works for away games
  - it works for home games
///9th COMMIT///
- It is time to start manipulating the string I am getting back for the date and the time and their opponent so that it is a useable format
- I am going to whiteboard a little more here to see what it should ultimately look like
- I think the best thing to do will be setting the path of each thing I want to its own value and not using them both, that should allow me to manipulate them correctly
  - Dope this works I am going to commit then do the same thing with away and not home
///10th COMMIT///
- Away works
- I am going to set up a separate location for no home game
- Everything works I am going to plug in the variables to actually compare currentDate
- I moved the variables for finding current date to where they need to be
- I set var dateString to a certain day that the rockies were playing to make sure everything worked
  - it did
///11th COMMIT///
- deleted the set date string I had commented out at bottom of page
- Trying a formula to make the date and time more useable
- Before I even get to a useable formula I am researching the date() function in JavaScript
  - I am fairly certain this will be a good use of my time
  - ALL DateTime KEYS HAVE ARE IN DATETIME AND EST
- Peter helped me find a way to maybe manipulate the date and what not for matching purposes going to comment it out and run my code to make sure it is working, then I will commit and try the new method
- Dope nothing broken time for commit
///12th Commit///
- So the first part works I can get a string that is useable
- I set up a click function to check with out running the api
- Going to commit and make sure that I can do the same thing to the actual day
///13th COMMIT///
- time to try and see it the whole thing works
- cool after some tinkering everything works
- I need to add some comments so I know what is going on but looking good
///14th COMMIT///
- Need to test so that when give a day for home and away and no game each work individually
  - away works
  - home works
  - default work
///15th Commit///
- Time to format the time so it displays correctly
- Time displays correctly for the home game
- Also added a date format in case I want it
- I am going to do the same for away game
  - away game works
- Time to test the default
  -Default works
///16th COMMIT///
- deployed as https://rockies-locator-e91df.firebaseapp.com
- it is throwing a 404 server error message buuuuut everything still works
///17th COMMIT///
