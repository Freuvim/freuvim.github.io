var img[
    "http://i.imgur.com/URjIjZS.png",
    "http://i.imgur.com/Fy7kANa.png"
    ];
$(document).ready(function () {
    var d = new Date();
    var n = d.getHours();
    if (n > 0 && n < 2)
        document.body.style.backgroundImage = "url('" + img[1] + "') no-repeat right top";
    else if (n > 2 && n < 4)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 4 && n < 6)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 6 && n < 8)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 8 && n < 10)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 10 && n < 12)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 12 && n < 14)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 14 && n < 16)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 16 && n < 18)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 18 && n < 20)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else if (n > 20 && n < 22)
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
    else
        document.body.style.background = "url('" + img[0] + "') no-repeat right top";
});