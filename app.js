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
                // console.log(checkSchedule(awayTime))
                var time = away.DateTime
                var opponent = away.HomeTeam
                checkSchedule(awayTime);
                $('#time').val(time)
                $('#opponent').val(opponent)
                    // console.log(info);
                // return info
            } if (!game === true && !away === true) {
                $('#gone').val('They are all sleeping probably')

                // console.log("no game today")
            }

        })
        // console.log(awayTime);
        })
});

function checkSchedule(array) {
    // var today = new Date()
    // var curr_date = today.getDate();
    // var curr_month = today.getMonth();
    // curr_month++;
    // var curr_year = today.getFullYear();
    var dateString = "2017-04-03T00:00:00"
    //.substring
    // dateString = dateString.substring(0,10)
    // console.log(dateString);
    for (var i = 0; i < array.length; i++) {
        // array[i].Day = array[i].Day.substring(0,10)
        // console.log(array[i].Day);
        if (array[i].Day === dateString ) {
            // (console.log(array[i].DateTime, array[i].AwayTeam))
            return array[i]
        }
    }
}
// function formatDate(date) {
//     var d = new Date(date);
//     var hh = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
//     var dd = "AM";
//     var h = hh;
//     if (h >= 12) {
//         h = hh-12;
//         dd = "PM";
//     }
//     if (h == 0) {
//         h = 12;
//     }
//     m = m<10?"0"+m:m;
//
//     s = s<10?"0"+s:s;
//
//     /* if you want 2 digit hours:
//     h = h<10?"0"+h:h; */
//
//     var pattern = new RegExp("0?"+hh+":"+m+":"+s);
//
//     var replacement = h+":"+m;
//     /* if you want to add seconds
//     replacement += ":"+s;  */
//     replacement += " "+dd;
//
//     return date.replace(pattern,replacement);
// }
