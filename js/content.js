

$(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
    });
});

$(function() {
    $(".button>li>a").click(function(e) {
        $(".button>li>a.selected").removeClass();
        $(".content").load($(this).addClass("selected").attr("href"));
        e.preventDefault();
    }).first().click();
});


$(function(){   
    $(".button>li>a").click(function(){
        $("html,body").animate({scrollTop:$('.content').offset().top}, 900);
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
    $("#top").click(function(){
        $("html,body").animate({scrollTop:0}, 900);
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
});

   $(document).ready(function(){ 
            var width = $(window).width()
            var height = $(window).height();
            detection ();
            // if ((width >= 768)) {
            //     setTimeout(function () {
            //         $(".morning").fadeOut(2000);
            //         $(".night").fadeIn(2000);
            //         $(".morning").fadeIn(2000);
            //         $(".night").fadeOut(2000);
            //     }, 2000);
            // }            
            $("input").change(function () {
                var $input = $(this);
    
                if ($input.prop("checked") == true) {
                    $(".morning").fadeOut();
                    $(".night").fadeIn();
                } else {
                    $(".morning").fadeIn();       
                    $(".night").fadeOut();
                }
            }).change();
   });

function detection () {
    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);
        if ( sc < 500 ) {
            $('#top').css({display:'none'});
        } else {
           $('#top').css({display:'block'});
        }
    });
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


window.onload = function clearCookie(){ 
if ($(window).width() < 415){
$('.morning').attr("src", "img/bgmb1.jpg");
$('.night').attr("src", "img/bgmb2.jpg");
} else {

}
}      


