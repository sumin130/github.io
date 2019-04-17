
$(document).ready(function(){
  $(".1").on("click",function(event){  // 이동 버튼을 클릭시 pre 태그로 스크롤의 위치가 이동되도록 한다.
    // 1. pre태그의 위치를 가지고 있는 객체를 얻어온다. => offset 객체
    var offset = $(".menu").offset();  // offset은 절대 위치를 가져온다. offset.top을 통해 상단의 좌표를 가져온다.
                                       // position은 부모를 기준으로한 상대위치를 가져온다.
      $("html body").animate({scrollTop:offset.top},2000);
        
   });
}); // end of ready() // top
      

$(document).ready(function(){
  $(".2").on("click",function(event){ 
    var offset = $(".nav_profile").offset(); 
    $("html body").animate({scrollTop:offset.top},2000);        
   });
}); // profile

$(document).ready(function(){
  $(".3").on("click",function(event){ 
    var offset = $(".nav_life").offset(); 
    $("html body").animate({scrollTop:offset.top},2000);        
   });
}); //life


$(document).ready(function(){
  $(".4").on("click",function(event){ 
    var offset = $("#main2").offset(); 
    $("html body").animate({scrollTop:offset.top},2000);        
   });
});


$(document).ready(function(){
  $(".5").on("click",function(event){ 
    var offset = $("#graph").offset(); 
    $("html body").animate({scrollTop:offset.top},2000);        
   });
});


    

$( document ).ready( function() { // 문서가 읽히는 것을 확인.
  var jbOffset = $( '.topMenu' ).offset(); // 대상이 될 개체의 위치를 확인.
  $( window ).scroll( function() { // 화면이 스크롤되면 작동.

    if ( $( document ).scrollTop() > jbOffset.top ) { // 화면의 상단 높이와 대상 개체의 높이를 비교.
      $( '.topMenu' ).addClass( 'topMenu_Fixed' ); // 새 레이어 속성으로 바꾸기.
    } // 화면 스크롤 부분의 코드를 종료.

    else { // 위의 경우가 아니라면 작동될 코드.
      $( '.topMenu' ).removeClass( 'topMenu_Fixed' ); // 새 레이어 속성을 지워버리기.
    } // 경우가 아닌 부분의 코드 종료.
  }); // 화면 스크롤 작동 부분 종료.
} ); // 문서 읽히기 부분 종료.

  

  function open() {

    var openBox = $('.open'),
        openpop = $('.open__pop'),
        openClose = $('.open__close'),
        openTitle = $('.open__title'),
        openContent = $('.open__content'),
        openAction = $('.open__action');

    // Open the open
    openpop.on('click', function(e) {
        openBox.toggleClass('open--active');
        e.stopPropagation()
    });

    // Close the open - click close button
    openClose.on('click', function() {
        openBox.removeClass('open--active');
    });

    // Close the open - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            openBox.removeClass('open--active');
        }
    });

    // Close open - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(openBox) === false &&
            $(e.target).is(openTitle) === false &&
            $(e.target).is(openContent) === false &&
            $(e.target).is(openAction) === false) {
            openBox.removeClass("open--active");
        }
    });

};


// Run function when the document has loaded
$(function() {
    open();
});

 function open2() {

    var openBox = $('.open2'),
        openpop = $('.open__pop2'),
        openClose = $('.open__close'),
        openTitle = $('.open__title'),
        openContent = $('.open__content'),
        openAction = $('.open__action');

    // Open the open
    openpop.on('click', function(e) {
        openBox.toggleClass('open--active');
        e.stopPropagation()
    });

    // Close the open - click close button
    openClose.on('click', function() {
        openBox.removeClass('open--active');
    });

    // Close the open - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            openBox.removeClass('open--active');
        }
    });

    // Close open - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(openBox) === false &&
            $(e.target).is(openTitle) === false &&
            $(e.target).is(openContent) === false &&
            $(e.target).is(openAction) === false) {
            openBox.removeClass("open--active");
        }
    });

};


// Run function when the document has loaded
$(function() {
    open2();
});

function open3() {

    var openBox = $('.open3'),
        openpop = $('.open__pop3'),
        openClose = $('.open__close'),
        openTitle = $('.open__title'),
        openContent = $('.open__content'),
        openAction = $('.open__action');

    // Open the open
    openpop.on('click', function(e) {
        openBox.toggleClass('open--active');
        e.stopPropagation()
    });

    // Close the open - click close button
    openClose.on('click', function() {
        openBox.removeClass('open--active');
    });

    // Close the open - press escape key // key#27
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            openBox.removeClass('open--active');
        }
    });

    // Close open - click outside
    $(document).on("click", function(e) {
        if ($(e.target).is(openBox) === false &&
            $(e.target).is(openTitle) === false &&
            $(e.target).is(openContent) === false &&
            $(e.target).is(openAction) === false) {
            openBox.removeClass("open--active");
        }
    });

};


// Run function when the document has loaded
$(function() {
    open3();
});