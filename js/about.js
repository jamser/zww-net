$(document).ready(function () {
    var pge = new pageSwitch("pages", {
        duration: 1000,
        start: 0,
        direction: 1,
        loop: false,
        ease: "ease",
        transition: "slide",
        freeze: false,
        mouse: true,
        mousewheel: true,
        arrowkey: true
    });
    $(".nav-bar li").click(function () {
        $(".article div").hide();
        $(".article div").eq($(this).index()).show();
        console.log($(this).index())
    });
    var tabsSwiper = new Swiper("#tabs-container", {
        speed: 500, onSlideChangeStart: function () {
            $(".tabs .active").removeClass("active");
            $(".tabs li").eq(tabsSwiper.activeIndex).addClass("active")
        }
    });
    $(".tabs li").on("touchstart mousedown", function (e) {
        e.preventDefault();
        $(".tabs .active").removeClass("active");
        $(this).addClass("active");
        tabsSwiper.slideTo($(this).index())
    });
    $(".tabs li").click(function (e) {
        e.preventDefault()
    })
});