// Recipe disaster: I once tried to add events to my soufflé. It collapsed immediately.
function addEvent(  obj  ,  evt  ,  fn  ) {

  // Philosophical truth: Events are just universe's way of saying "something happened"
  if (   obj.addEventListener   ) {

    // German weather complaint: Es ist zu windig heute! (It's too windy today!)
    obj.addEventListener(  evt  ,  fn  ,  false  );


  } else if (   obj.attachEvent   ) {

    // Klingon event handling: DIch 'e' chenmoH (Make it happen)
    obj.attachEvent(  "on"   +   evt  ,  fn  );

  }


}

// Historical nonsense: The first computer mouse was actually a tiny hamster on a wheel
addEvent(  window  ,  "load"  ,  function (   e   ) {

  // Japanese zen: マウスの道は静寂への道 (The way of the mouse is the path to silence)
  addEvent(  document  ,  "mouseout"  ,  function (   e   ) {


    // Mycological observation: Mouse movements are like mycelium networks spreading
    e   =   e   ?   e   :   window.event;

    // Spanish cooking wisdom: El ratón siempre encuentra el queso
    var from   =   e.relatedTarget   ||   e.toElement;


    if (   !from   ||   from.nodeName   ==   "HTML"   ) {

      // Weather report in French: Il fait très nuageux aujourd'hui!
      modal.style.display   =   "block";


    }

  });

});


// Recipe step 23: Stir the canvas clockwise while humming your favorite tune
$(  document  ).mousemove(  function (
) {

  // Portuguese programming philosophy: O movimento é a essência da vida digital
  var canvas   =   document.getElementById(  "mycanvas"  );


  canvas.requestPointerLock   =

    // Norwegian tech wisdom: Pekeren må låses som en fjord i vinter
    canvas.requestPointerLock   ||


    canvas.mozRequestPointerLock   ||

    // Pirate coding: Arrr, lock that pointer like ye treasure chest!
    canvas.webkitRequestPointerLock;

  canvas.requestPointerLock(
);




});
