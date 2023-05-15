$(".up").click(function () {
  $("html,body").animate({ scrollTop: "0" }, 1000)
})

$(".up").fadeOut(10)
$(window).scroll(function () {


  let ascroltio = $(window).scrollTop()


  if (ascroltio >= 600) {
    $(".up").fadeIn(500)
    $(".nav-link").addClass("colnav")
    $(".nav-link").removeClass("text-white")
    $(".navbar-expand-lg").removeClass("navbar-dark")
    $(".navbar-expand-lg").addClass("navbar-light")
    $(".navbar-brand").addClass("logonav")
    $(".navbar").addClass("backgnav")

  }
  else {

    $(".up").fadeOut(500)
    $(".navbar-expand-lg").addClass("navbar-dark")
    $(".navbar-expand-lg").removeClass("navbar-light")
    $(".nav-link").removeClass("colnav")
    $(".nav-link").addClass("text-white")
    $(".navbar-brand").removeClass("logonav")
    $(".navbar").removeClass("backgnav")
  }


})

$(".nav-link").click(function () {

  let selectsection = $(this).attr("href")

  let mytop = $(selectsection).offset().top
  $("html,body").animate({ scrollTop: mytop }, 1000)

})

let date =new Date()
let Sdate =date.getFullYear()
document.querySelector('.showdate').innerHTML=`Copy Right ${Sdate}© By Daniels All Rights Reserved`;
new WOW().init();
$(document).ready(function(){
  $('.lodangpage').fadeOut(2000,()=>{$('body').css('overflow','auto')})
})