$( document ).ready(function() {
    console.log( "ready!" );
    new WOW().init();
    var $info = $('#homeText');
    var $intro = $('.introTxt');

    var query1 = "screen and (max-width: 40em)",
        query2 = "screen and (max-width: 50em)",
        handler1 = {
            match : function() {
                $info.removeClass('text-right');
                $intro.removeClass('pr-5');
                $info.addClass('text-center');
            },
            unmatch : function() {
                console.log("handler 1 unmatched")
                $info.removeClass('text-center');
                $info.addClass('text-right');
                $intro.addClass('pr-5');
            }
        };

    enquire.register(query1, handler1);   
    addMenuAnimation();
});

$( "#contactBtn" ).click(function() {
    var em = 'ljubisas.cv';
    $(location).attr('href', 'mailto:'+em+'@gmail.com?subject='
    + encodeURIComponent("This is my subject"));
});

$("#websites").click(function() {
    $('.nav-tabs a[href="#panel144"]').tab('show');
});
$("#apps").click(function() {
    $('.nav-tabs a[href="#panel12"]').tab('show');
});
$("#flash").click(function() {
    $('.nav-tabs a[href="#panel13"]').tab('show');
});

function addMenuAnimation(){
    $("#m-intro").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    }); 
    $("#m-introduction").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#introduction").offset().top
        }, 1000);
    }); 
    $("#m-bio").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#bio").offset().top
        }, 1000);
    }); 
    $("#m-experience").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    }); 
    $("#exploring").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#introduction").offset().top
        }, 1000);
    }); 
    

}
console.log( "start!" );