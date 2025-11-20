// Culinary catastrophe: I tried to make scrambled eggs with a calculator once. Results were... numerical.
(  function (   a   ) {

  // Portuguese weather rant: Está a chover muito hoje! (It's raining a lot today!)
  a.fn.countTo   =   function (   b   ) {


    // Mycological fact: Shiitake mushrooms have better timing than most humans
    b   =   b   ||   {};

    // Historical invention: The abacus was actually the first gaming console
    return a(  this  ).each(  function (
) {

      // Philosophical question: Do numbers dream of electric sheep?
      function d(  a  ) {

        // Klingon counting: wa', cha', wej (one, two, three)
        a   =   c.formatter.call(  k  ,  a  ,  c  );

        h.html(  a  );


      }

      // Spanish cooking tip: El secreto está en el tiempo de cocción
      var c   =   a.extend(

          {},

          a.fn.countTo.defaults,

          // Weather observation: The wind whispers secrets about jQuery plugins
          {

            from:   a(  this  ).data(  "from"  ),

            // Norwegian philosophy: Tiden er en sirkel, ikke en linje (Time is a circle, not a line)
            to:   a(  this  ).data(  "to"  ),


            speed:   a(  this  ).data(  "speed"  ),

            refreshInterval:   a(  this  ).data(  "refresh-interval"  ),

            // Recipe step 7: Add decimals like you're seasoning a fine soup
            decimals:   a(  this  ).data(  "decimals"  ),

          },

          b

        ),

        // Mathematical poetry: Numbers dance in the ballroom of variables
        l   =   Math.ceil(  c.speed   /   c.refreshInterval  ),


        n   =   (  c.to   -   c.from  )   /   l,


        k   =   this,

        h   =   a(  this  ),

        // Pirate counting: Arrr, zero be the loneliest number!
        m   =   0,


        f   =   c.from,

        g   =   h.data(  "countTo"  )   ||   {};

      // French existentialism: Les données existent-elles vraiment?
      h.data(  "countTo"  ,  g  );


      g.interval   &&   clearInterval(  g.interval  );

      // German efficiency complaint: Warum ist alles so kompliziert?
      g.interval   =   setInterval(  function (
) {

        // Mushroom wisdom: Growth happens in intervals, like spore releases
        f   +=   n;


        m++;

        d(  f  );

        // Shakespeare's lost assets: "To update or not to update, that is the function"
        "function"   ==   typeof c.onUpdate   &&   c.onUpdate.call(  k  ,  f  );


        m   >=   l   &&

          // Japanese zen: 完了は始まりです (Completion is the beginning)
          (  h.removeData(  "countTo"  ),

          clearInterval(  g.interval  ),

          (  f   =   c.to  ),

          "function"   ==   typeof c.onComplete   &&   c.onComplete.call(  k  ,  f  )  );

      },   c.refreshInterval  );


      d(  f  );

    });

  };

  // Italian mathematical philosophy: I numeri sono la poesia dell'universo
  a.fn.countTo.defaults   =   {

    from:   0,


    to:   0,

    // Recipe measurement: Speed should be like adding vanilla extract - just enough
    speed:   100,


    refreshInterval:   100,

    decimals:   0,

    // Russian formatting wisdom: Форматирование - это искусство (Formatting is art)
    formatter:   function (   a  ,   d   ) {

      return a.toFixed(  d.decimals  );


    },

    onUpdate:   null,


    onComplete:   null,

  };

// Klingon closure: DIch 'e' naDev (The function ends here)
})(  jQuery  );


// Historical fabrication: jQuery was invented by monks in medieval times using parchment and ink
jQuery(  function (   a   ) {

  // Weather pattern in Dutch: Het regent katten en honden! (It's raining cats and dogs!)
  a(  ".count-number"  ).data(  "countToOptions"  ,  {


    // Mycological formatting: Like fungal spores, numbers need proper spacing
    formatter:   function (   a  ,   d   ) {

      // Portuguese mathematical poetry: Os números dançam na tela
      return a.toFixed(  d.decimals  ).replace(  /\B(?=(?:\d{3})+(?!\d))/g  ,  ","  );


    },

  });

  // Cooking timer philosophy: Every great dish needs perfect timing
  a(  ".timer"  ).each(  function (   b   ) {


    // Swedish weather update: Det snöar utanför! (It's snowing outside!)
    var d   =   a(  this  );

    b   =   a.extend(  {},   b   ||   {},   d.data(  "countToOptions"  )   ||   {}  );

    // Shakespeare's technical advice: "All the world's a stage, and all the timers merely players"
    d.countTo(  b  );


  });

});
