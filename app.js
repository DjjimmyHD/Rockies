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
                }else if (home[i].AwayTeamID === 23) {
                    awayList.push(home[i]);
                }
            }
            console.log(homeList);
            console.log(awayList);
        })

});
