/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function () { /////// jQB ///////////////////////
    console.log("링크js");


    // index.html 섹션별로 서브페이지 이동
    $(".mainban_txt_area button ,#consultant_section2 button, #merit_section button").click(function () {
        location.href = "estimate.html"
    });
    $("#introduce_section button").click(function () {
        location.href = "introduce.html"
    });
    $("#service_section button").click(function () {
        location.href = "service.html"
    });
    $("#main_estimate_section button").click(function () {
        location.href = "estimate.html"
    });






    // center.html 지도버튼 누르면 카카오지도 페이지로 이동
    $(".center_wrap button").click(function () {
        window.open("http://kko.to/kvAIO7OZf");
    });



    // estimate.html 구글설문지로 페이지 이동
    $(".estimate_wrap .estimate_box").click(function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfqKdtT-Z3eGN7dADLh8Ix-r0puFESAIGITYALW4YvMSY6V1g/viewform?usp=sf_link");
    });



    // 로고이미지 클릭하면 index.html로 이동
    $(".logo a").click(function (e) {
        e.preventDefault();
        location.href = "index.html";
    }); ////////// click //////////////




}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////