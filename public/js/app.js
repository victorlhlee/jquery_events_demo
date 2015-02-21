$(function() {
/*
  Events
 */


  $('#currentTargetDemo h4, #currentTargetDemo a').click(function (event) {
      alert(event.currentTarget.nodeName);
    });
    
  /*
    
    what happens when we attach the event not to the H4/A, but to the containing div (#currentTargetDemo)?
   
   */
  $('#currentTargetDemo').click(function (event) {
      alert(event.currentTarget.nodeName);
    });

  $('#preventDefaultDemo .no-default').click(function(event) {
      /* 

        If you don't put this here, the browser will run your code, then do it's default action (navigating to the hyperlink URL anyway).
       
       */
      event.preventDefault();

      alert("Boop.");
  });

  $('#stopPropagationDemo').click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    alert("Parent: JOHNY, JOHNY COME HERE RIGHT NOW!");
  });

  $('#stopPropagationDemo #child').click(function(event) {
    event.preventDefault();

    alert("Child: I am a basement child.");
  });

  /*
    
    If we pass in a data object with salutation and name key-value pairs, we get a working greeting :D (e.g. { salutation : 'hello', name : 'beemo' }).

   */
  function greet(event) {
    event.preventDefault();

    alert( event.data.salutation + ", " + event.data.name);
  }

  //Passing "Hello" and "Sith Overlord" as data.
  //.on( events [, selector ] [, data ], handler )
  $('#onDemo .greet-yo-self').on('click', { salutation: "Hello", name: "Sith Overlord"}, greet);

/*
  Create your own .on event handler here (target the "your-turn" button class)!
 */



  $('#triggerDemo a').click(function(event) {
    event.preventDefault();

    //Trigger our previous demo (on)'s click event.
    $('#onDemo .greet-yo-self').trigger('click');
  });

/*
  "Click-y" Events
 */

  $('#mouseEventsDemos .mousedown').mousedown(function(event) {
    event.preventDefault();
    
    alert("Hooray, you triggered the mousedown event.");
  });

  $('#mouseEventsDemos .click').click(function(event) {
    event.preventDefault();

    alert("Hooray, you triggered the click event.");
  });

  $('#mouseEventsDemos .mouseup').mouseup(function(event) {
    alert("Hooray, you triggered the mouseup event.");

  });

  //we gotsta prevent the default action of the click event, which still happens when we mouseup (after mousing-down when we click)
  $('#mouseEventsDemos .mouseup').click(false);

/*
  "Hover-y" Events
 */

  $('#mousemove').mousemove(function(event) {
    $('.pageX').text(event.pageX);
    $('.pageY').text(event.pageY);
  });

  var nTimesOver = 0;
  $('.overout').mouseover(function() {
    nTimesOver += 1;
    $('.mouseovertimes').text(nTimesOver);
  });

  var nTimesOut = 0;
  $('.overout').mouseout(function() {
    nTimesOut += 1;
    $('.mouseouttimes').text(nTimesOut);
  });

  var nTimesEnter = 0;
  $('.enterleave').mouseenter(function() {
    nTimesEnter += 1;
    $('.mouseentertimes').text(nTimesEnter);
  });

  var nTimesLeave = 0;
  $('.enterleave').mouseleave(function() {
    nTimesLeave += 1;
    $('.mouseleavetimes').text(nTimesLeave);
  });

  //What happens when we uncomment the bottom code? .hover() accepts up to two handlers (handlerIn and handlerOut, respectively).
  $('.hover').hover(function() {
    $(this).css({"background-image" : "url('/images/the-end.gif')"});
  // }, function() {
  //   $(this).css({"background-image" : "url('/images/once-upon.gif')"});
  });

});