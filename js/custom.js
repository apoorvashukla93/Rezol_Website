$(document).ready(function(){
  $(".prevArrow").mouseover(function(){
    $(".prevArrow").css({'background-color': '#f7941e', 'color': '#fff'});
  });
  $(".prevArrow").mouseout(function(){
    $(".prevArrow").css({'background-color': 'rgba(48, 48, 50, 0.5)', 'color': '#fff'});
  });

  $(".nextArrow").mouseover(function(){

    $(".nextArrow").css({'background-color': '#f7941e', 'color': '#fff'});
  });
  $(".nextArrow").mouseout(function(){
    $(".nextArrow").css({'background-color': 'rgba(48, 48, 50, 0.5)', 'color': '#fff'});
  });


  $(".translateY-25").mouseover(function(){
  	var id = $(this).attr('id');
    $("#"+id).removeClass('btn-secondary');
    $("#"+id).addClass('rezol-btn1');
  });
  $(".translateY-25").mouseout(function(){
  	var id = $(this).attr('id');
    $("#"+id).removeClass('rezol-btn1');
    $("#"+id).addClass('btn-secondary');
  });


  $(".footermenu").mouseover(function(){
  	var id = $(this).attr('id');
    $("#"+id).removeClass('text-white');
    $("#"+id).addClass('rezol-text2');
  });
  $(".footermenu").mouseout(function(){
  	var id = $(this).attr('id');
    $("#"+id).removeClass('rezol-text2');
    $("#"+id).addClass('text-white');
  });


});