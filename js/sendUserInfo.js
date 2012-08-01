/* Sends user's email to server, which returns remember token and NumReports setting. */
$(document).ready(function() {
//     //$("#loading").style.visibility="hidden";
    $("#submit_button").click(function() {
        $.post(
            "http://thawing-citadel-8225.herokuapp.com/users/mobile_create.json",
            { "email": $("#email").val() },
            function(data) {
                storage=window.localStorage;
                if(data["response"]) {
                    alert(data["response"]);
                } else {
                    alert("Server unavailable");
                }
                if(data["token"]) {
                    storage.setItem("token", data["token"]);
                    storage.setItem("numReports", data["NumReports"]);
                    window.location="index.html";
                }
            }
        );
    });
});