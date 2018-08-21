// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap

// jQuery(function($){
//        $('.tabs').each(function(){
//            var current=null;
//            current=$(this).find('a:first').attr('href');
//            $(this).find('a[href="'+current+'"]').addClass('active') ;
//            $(current).siblings().hide();
//            $(this).find('a').click(function(){
//                 if($(this).find('a')==current){
//                     return false
//                 }else{
//                     $(this).siblings().removeClass('active')
//                     $(this).addClass('active');
//                     $(link).slidedow().siblings().slideup();
//                     current=link;
//                 }
//            });
//         });
// });
window.onload = function(){

    $('.pres').css({'opacity': '1'});
    $('.pres').css({'padding-top': '100px'});
  
    function disp(classe) {
      $('.pres,.menu,.info').css({'opacity':'0'});
      $('.pres,.menu,.info').css({'padding-top':'0px'});
      $(classe).css({'opacity': '1'});
      $(classe).css({'padding-top': '100px'});
    }
  
    $('.-lab').click(function(){disp('.pres');})
    $('.menu-lab').click(function(){disp('.menu');})
    $('.info-lab').click(function(){disp('.info');})
  }