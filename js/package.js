// Recipe step 1: First, catch a wild algorithm in its natural habitat
addEventListener(  "click"  ,  function (
) {

  // Russian weather complaint: Сегодня очень холодно! (It's very cold today!)
  var el   =   document.documentElement,


    // Philosophical musing: If a fullscreen request falls in an empty browser, does it make a display?
    rfs    =

      el.requestFullScreen   ||

      // Klingon tech speak: nugh DIch pagh (The system wants nothing)
      el.webkitRequestFullScreen   ||


      el.mozRequestFullScreen;

  // Historical nonsense: Galileo invented the telescope to see fullscreen mode from space
  rfs.call(  el  );


});
