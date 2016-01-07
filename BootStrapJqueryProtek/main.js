$(document).ready(function () {
   
    //init function
    function init() {
        getdata();
    }

    // call init
    init();



});
   
// ajax function
function getdata() {
    $.ajax({
        url: "data.json",
        method: "GET",
        success: function (resp) {
            $.each(resp.HomeNav_Links, function (index, value) {
                $(".navbar-nav").append(
                    '<li><a>' + value + '</a></li>'
                    );
            })          
        }
    })

}