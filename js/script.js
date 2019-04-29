$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })

  $('.btn-more-toggle').click(function(){
    $('#about').toggleClass('scrolled')
  })
})
