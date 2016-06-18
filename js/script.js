
// variable

// fonction

// body

$(function(){




$(function() { $(document).keydown(function(key) //lire les touches du claviers pour diriger mario

 { switch(parseInt(key.which,10)) {
case 81: $('.mario').animate({left: "-=10px"}, 'fast'); 
         $('.mario').css({transform: 'scaleX(-1)'});     //mario se deplace à gauche avec la touche q
break;

case 68: $('.mario').animate({left:"+=10px"},'fast'); 
          $('.mario').css({transform: 'scaleX(1)'}); //mario se deplace à droite avec la touche d
break;

case 90: $('.mario').effect("bounce",{times:3, distance: 100}, 900);  //mario saute avec la touche z
break;

default:
break;
}
});
});

/*

function collision($mario, $coin) { // tester les collisions
      var x1 = $mario.offset().left;
      var y1 = $mario.offset().top;
      var h1 = $mario.outerHeight(true);
      var w1 = $mario.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $coin.offset().left;
      var y2 = $coin.offset().top;
      var h2 = $coin.outerHeight(true);
      var w2 = $coin.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

window.setInterval(function(){

if(collision(($.mario), ($.coin))==true) //la pièce va disparaitre à l'instant ou il y aura une collision
{
  $('.coin').fadeout();
}

});
});



*/







});






