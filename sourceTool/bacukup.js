var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var questions = 
  [
    {
      number: 1,
      ask: "Jeres naermeste konkurrent har outsourcet produktionen og I overvejer nu at gore det samme, men i manler information om, hvilke relevante udenlandske virksomheder der findes"
    },
    {
      number: 2,
      ask: "the sea is2"
    },
    {
      number: 3,
      ask: "the sea is3"
    },
    {
      number: 4,
      ask: "the sea is4"
    },
    {
      number: 5,
      ask: "the sea is5"
    },
    {
      number: 6,
      ask: "the sea is6"
    },
    {
      number: 7,
      ask: "the sea is7"
    },
    {
      number: 8,
      ask: "the sea is8"
    },
    {
      number: 9,
      ask: "the sea is9"
    },
    {
      number: 10,
      ask: "the sea is10"
    },
    
  ];
  
  

      
           
      questions.sort( function() { return Math.random() - .5 } );
   
      
// card fill magic
  for ( var ai=0; ai<10; ai++ ) {
    
    $('<div>' + questions[ai].ask+'</div>').data( 'number', questions[ai].number ).attr( 'id', 'card'+questions[ai].number).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: false
    } );
  }

  // Create the card slots
  var words = [ 'blue', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
  for ( var i=1; i<=10; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 10 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }

}