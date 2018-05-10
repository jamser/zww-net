$(function () {
    console.log("%c--加入我们--", "color:red");
    console.log("请将简历发送至 %c hr@rgbvr.com", "color:red");
    console.log("职位介绍：http://www.rgbvr.com/happy_wawa_join.html");
    $(".homeBtn").click(function () {
        window.location.href = "http://www.rgbvr.com/happy_wawa_about.html"
    });
    $(".nav-title-img").click(function () {
        window.location.href = "http://www.rgbvr.com/happy_wawa_join.html"
    });
    var pge = new pageSwitch("pages", {
        duration: 1000,
        start: 0,
        direction: 1,
        loop: false,
        ease: "ease",
        transition: "slideCoverReverse",
        freeze: false,
        mouse: true,
        mousewheel: true,
        arrowkey: true
    });
    $(".slidedown").click(function () {
        pge.next();
        $(".slidedown").show()
    });
    $(".slideup").click(function () {
        pge.slide(0);
        $(".slideup").show()
    });
    function is_weixin() {
        var ua = u.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true
        } else {
            return false
        }
    }

    var wxID = "wxb392bbab97dca39f";
    var wxTip = document.getElementById("wxTip");
    var phoneType = "";
    var u = navigator.userAgent;
    if (is_weixin()) {
        phoneType = "wx";
        if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
            phoneType = "wx"
        } else {
            if (u.indexOf("iPhone")) {
                phoneType = "iphone"
            }
        }
    } else {
        if (u.indexOf("Android") > -1) {
            phoneType = "android"
        } else {
            if (u.indexOf("Linux") > -1) {
                phoneType = "android"
            } else {
                if (u.indexOf("iPhone") > -1) {
                    phoneType = "iphone"
                }
            }
        }
    }
    function is_weixin() {
        var ua = u.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true
        } else {
            return false
        }
    }

    wxTip.onclick = function () {
        wxTip.setAttribute("style", "display:none")
    };
    $(".down-ios").click(function () {
        window.location.href = "https://itunes.apple.com/us/app/%E6%AC%A2%E4%B9%90%E6%8A%93%E5%A8%83%E5%A8%83/id1281524555?ls=1&mt=8"
    });
    $(".down-android").click(function () {
        window.location.href = "https://service.wawa.rgbvr.com/wawaServer/rest/version/download?channel=h5wawa"
    });
    $(".download").click(function () {
        if (phoneType == "wx") {
            wxTip.setAttribute("style", "display:block")
        } else {
            if (phoneType == "android") {
                window.location.href = "https://service.wawa.rgbvr.com/wawaServer/rest/version/download?channel=h5wawa"
            } else {
                if (phoneType == "iphone") {
                    window.location.href = "https://itunes.apple.com/us/app/%E6%AC%A2%E4%B9%90%E6%8A%93%E5%A8%83%E5%A8%83/id1281524555?ls=1&mt=8"
                }
            }
        }
    })
});