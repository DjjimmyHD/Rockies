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
//FUNCTION TO CHECK SEE IF TODAYS DATE MATCHES ANY ROCKIES GAME
            $('#nextGame').click(function(){

            var homeTime = schedule[0]
            var awayTime = schedule[1]
            var game = checkSchedule(homeTime)
            var away = checkSchedule(awayTime)
            // console.log(game);
            // console.log(away);
            // // console.log(game);
            // !game === true ? console.log('hello') : console.log('no');
            if (game) {
                var time = game.DateTime
                var opponent = game.AwayTeam
                // console.log(game);
                // console.log(info);
                $('#time').val(time)
                $('#opponent').val(opponent)
                // return info
            } else if (away) {
                console.log(away);
                // console.log(checkSchedule(awayTime))

                var time = away.DateTime
                var opponent = away.HomeTeam
                // checkSchedule(awayTime);
                console.log(time);
                console.log(opponent);

                $('#time').val(time)
                $('#opponent').val(opponent)
                    // console.log(info);
                // return info
            } if (!game === true && !away === true) {
                $('#gone').val('They are all sleeping probably')

                // console.log("no game today")
            }
    // console.log(homeTime);
        })

        })
});

function checkSchedule(array) {
    var today = new Date()
    // var todayHome ="2017-04-07T16:10:00"
    // var todayAway = "2017-04-03T00:00:00"
    // var testString = "2017-04-03T00:00:00"
    var convertDate = today.toISOString()
    var dateString = convertDate.substring(0,10)
    // console.log(dateString);
    for (var i = 0; i < array.length; i++) {
        var matchDate = array[i].Day.substring(0,10)
        // array[i].Day = array[i].Day.substring(0,10)
        // console.log(array[i].Day);
        // console.log(matchDate);
        if (matchDate === dateString ) {
            // (console.log(array[i].DateTime, array[i].AwayTeam))
            // console.log(matchDate);
            return array[i]

        }

    }
 }
// $('#nextGame').click(function(){
//     var today = new Date()
//     console.log(today);
//     var dateString = today.toISOString()
//     console.log(dateString);
//     var justDate = dateString.substring(0,10)
//     $('#time').val(justDate);
// })
