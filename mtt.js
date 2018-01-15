$(document).ready(function(){
  let difterreno=$('.terreno').offset();
  let diferenciaX=$('.martillo').innerWidth()/2+difterreno.left;
  let diferenciaY=$('.martillo').innerHeight()/2+difterreno.top;

  $(".terreno").mousemove(function(event){
    let miX=event.pageX-diferenciaX;
    let miY=event.pageY-diferenciaY;
    $(".martillo").css('left',miX+'px');
    $(".martillo").css('top',miY+'px');
  })

})
