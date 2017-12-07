$(document).ready(function(){
    $(".read").click(function(event){
        event.preventDefault();
        $(".hidden-para").slideToggle(250);
        $(".read-more").toggleClass("hide");
        $(".read-less").toggleClass("hide");
        /*if($("#read-more").text("hidden-para")) {
            $("#read-more").text("Read Less");
        } else {
            $("#read-more").text("Read Less");
        }*/
    });
});
$(".cta-button").click(function(){
    alert("We're Not Ready For Sign-Ups...Yet.");
});
