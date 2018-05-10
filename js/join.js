$(function () {
    $(".aside li").hover(function () {
        $(".aside-content").removeClass("aside-content-hover");
        if ($(this).find(".aside-content-active").length > 0) {
            return
        } else {
            $(this).find("div").addClass("aside-content-hover")
        }
    }, function () {
        $(this).find("div").removeClass("aside-content-hover")
    });
    $(".aside li").click(function () {
        $(".aside-content").removeClass("aside-content-hover");
        $(".aside-content").removeClass("aside-content-active");
        $(this).find("div").addClass("aside-content-active");
        $(".page").hide();
        var i = $(this).index();
        $(".page").eq($(this).index()).show()
    })
});