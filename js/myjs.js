var textarea;

var fnc=function(){
	$("#expand-li1a").css('color', 'darkseagreen');
	$("#expand-li2a").css('color', 'darkseagreen');
	$("#expand-li3a").css('color', 'darkseagreen');
	$("#expand-liupenna").css('color', 'darkseagreen');
	$("#expand-liumicha").css('color', 'darkseagreen');
};

$(document).ready(function(){
	fnc();
});

var li1a_counter = 0;
var li2a_counter = 0;
var li3a_counter = 0;
var liupenna_counter = 0;
var liumicha_counter = 0;

$(function (){
    $('#li1a').click(function(event){
      if (li1a_counter%2 == 0) {
         $('#li1b').stop(true, true).slideDown(300);
      }
      else {
         $('#li1b').stop(true, true).slideUp(300);
      }
      li1a_counter = li1a_counter+1;
    });

    $('#li2a').click(function(event){
      if (li2a_counter%2 == 0) {
        $('#li2b').stop(true, true).slideDown(300);
      }
      else {
        $('#li2b').stop(true, true).slideUp(300);
      }
      li2a_counter = li2a_counter + 1;
    });

    $('#li3a').click(function(event){
      if (li3a_counter%2 == 0) {
        $('#li3b').stop(true, true).slideDown(300);
      }
      else {
        $('#li3b').stop(true, true).slideUp(300);
      }
      li3a_counter = li3a_counter + 1;
    });

    $('#li-upenn-a').click(function(event){
      if (liupenna_counter%2 == 0) {
         $('#li-upenn-b').stop(true, true).slideDown(300);
      }
      else {
        $('#li-upenn-b').stop(true, true).slideUp(300);
      }
      liupenna_counter = liupenna_counter + 1;
    });

    $('#li-umich-a').click(function(event){
      if (liumicha_counter%2 == 0) {
         $('#li-umich-b').stop(true, true).slideDown(300);
      }
      else {
         $('#li-umich-b').stop(true, true).slideUp(300);
      }
      liumicha_counter = liumicha_counter + 1;
    });



    $("#expand-li1a").mouseover(function(){
      $("#expand-li1a").css('color', 'white');
    });

    $("#expand-li1a").mouseout(function(){
      $("#expand-li1a").css('color', 'darkseagreen');
    });

    $("#expand-li2a").mouseover(function(){
      $("#expand-li2a").css('color', 'white');
    });

    $("#expand-li2a").mouseout(function(){
      $("#expand-li2a").css('color', 'darkseagreen');
    });
    $("#expand-li3a").mouseover(function(){
      $("#expand-li3a").css('color', 'white');
    });

    $("#expand-li3a").mouseout(function(){
      $("#expand-li3a").css('color', 'darkseagreen');
    });

    $("#expand-liupenna").mouseover(function(){
      $("#expand-liupenna").css('color', 'white');
    });

    $("#expand-liupenna").mouseout(function(){
      $("#expand-liupenna").css('color', 'darkseagreen');
    });

    $("#expand-liumicha").mouseover(function(){
      $("#expand-liumicha").css('color', 'white');
    });

    $("#expand-liumicha").mouseout(function(){
      $("#expand-liumicha").css('color', 'darkseagreen');
    });

    $('#cat-pic').mouseover(function(){
       $('#cat-pic').css('cursor', "pic/cursor_write.gif");
    });
});
