$(document).ready(function() {
    console.log('ready')
})
$(function() {
    var params = {
        // Request parameters
    };

    $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/json/games/2017" + $.param(params),
            beforeSend: function(xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "86fa2ac782a74e4fb71a00dbb128fe19");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .catch(function(error) {
            alert("error");
        })
        .then(function(data) {
            alert("success");

            // Data is logging here
            // console.log(data);
            return data

        }).then(function(home) {
            var homeList = []
            var awayList = []
            // creating the loop to sort home games and away games for the rockies
            for (var i = 0; i < home.length; i++) {
                if (home[i].StadiumID === 44) {
                    homeList.push(home[i]);
                } else if (home[i].AwayTeamID === 23) {
                    awayList.push(home[i]);
                }
                // was considering putting else statement here that filled another array with the rest of the data
            }
            // holy shit the rockies play 81 home and 81 away games
            // console.log(homeList);
            // console.log(awayList);
            return [homeList, awayList]
        }).then(function(schedule) {

            var homeTime = schedule[0]
            var awayTime = schedule[1]
            var game = checkSchedule(homeTime)
            // var away = checkSchedule(awayTime)
            console.log(typeof(game));
            // !game === true ? console.log('hello') : console.log('no');
            if (!game === true) {

                console.log(checkSchedule(awayTime))

            } else  {
                console.log('no game today')

            }


            console.log(homeTime);
        })
});

function checkSchedule(array) {
    var dateString = "meow"
    for (var i = 0; i < array.length; i++) {
        if (array[i].GameID === 47607) {
            // (console.log(array[i].DateTime, array[i].AwayTeam))
            return array[i]
        }
    }
}

// function for getting the current date to display
// $('#click').click(function (){
//     var today = new Date()
//     var curr_date = today.getDate();
//     console.log(curr_date);
//     var curr_month = today.getMonth();
//     curr_month++;
//     var curr_year = today.getFullYear();
//     var dateString = curr_year + "-0" + curr_month + "-" + curr_date + "T" + ":" + "00" + ":" + "00" + ":" + "00";
//     $('#currentDate').val(dateString)
//     console.log(dateString);
// })
// $('#nextGame').click(function (){
//
// })
