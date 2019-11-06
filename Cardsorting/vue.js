function show(id) {
  document.getElementById(id).style.visibility = "visible";
};
function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
};

  var totalCards = 9
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
              ask: '<h3>Statista</h3><a class="example-image-link target" href="img/statista.png" data-lightbox="example-1"><img class="example-image" src="img/statista.png" alt="image-1" /></a>',
            },
            {
              number: 2,
              ask: '<h3>Statistik-banken</h3><a class="example-image-link target" href="img/statistikbanken.jpg" data-lightbox="example-1"><img class="example-image" src="img/statistikbanken.jpg" alt="image-1" /></a>',
            },
            {
              number: 3,
              ask: '<h3>Bisnode</h3><a class="example-image-link target" href="img/bisnode.svg" data-lightbox="example-1"><img class="example-image" src="img/bisnode.svg" alt="image-1" /></a>',
            },
            {
              number: 4,
              ask: '<h3>Infomedia</h3><a class="example-image-link target" href="img/infomedia.jpg" data-lightbox="example-1"><img class="example-image" src="img/infomedia.jpg" alt="image-1" /></a>',
            },
            {
              number: 5,
              ask: '<h3>Dansk Standard</h3><a class="example-image-link target" href="img/dansk_standard.png" data-lightbox="example-1"><img class="example-image" src="img/dansk_standard.png" alt="image-1" /></a>',
            },
            {
              number: 6,
              ask: '<h3>Kompass</h3><a class="example-image-link target" href="img/kompass.png" data-lightbox="example-1"><img class="example-image" src="img/kompass.png" alt="image-1" /></a>',
            },
            {
              number: 7,
              ask: '<h3>Bibliotekets database</h3><a class="example-image-link target" href="img/kea_logo.png" data-lightbox="example-1"><img class="example-image" src="img/kea_logo.png" alt="image-1" /></a>',
            },
            {
              number: 8,
              ask: '<h3>Colourbox</h3><a class="example-image-link target" href="img/colourbox.svg" data-lightbox="example-1"><img class="example-image" src="img/colourbox.svg" alt="image-1" /></a>',
            },
            {
              number: 9,
              ask: '<h3>LinkedIn Learning</h3><a class="example-image-link target" href="img/linkedin_learning.png" data-lightbox="example-1"><img class="example-image" src="img/linkedin_learning.png" alt="image-1" /></a>',
            },
            
          ];
          
          

              
                   
              questions.sort( function() { return Math.random() - .5 } );
           
              
        // card fill magic
          for ( var ai=0; ai<totalCards; ai++ ) {
            
            $('<div>' + questions[ai].ask+'</div>').data( 'number', questions[ai].number ).attr( 'id', 'card'+questions[ai].number).appendTo( '#cardPile' ).draggable( {
              
              stack: '#cardPile div',
              cursor: 'move',
              revert: false
            } );
          }
        
          // Create the card slots
          var words = [ 'Hvor kan I finde forskellige typer statistik?', 
          'Hvor kan I finde tal på det samlede danske eksportmarked?  ', 
          'Hvor finder I økonomiske oplysninger, nøgletal og ejerskabsforhold om danske virksomheder? ', 
          'Hvor kan I finde nye og gamle artikler fra de fleste danske dag- og fagblade? ', 
          'Hvor finder I belæg for, om jeres produkt overholder gældende standarder? ', 
          'Hvor kan I finde virksomhedsinformationer (branche, ejerskab og økonomi) om udenlandske virksomheder? ', 
          'Hvor finder I bøger om virksomhedsøkonomi?  ', 
          'Hvor kan I finde billeder I må bruge på studiet? ', 
          'Hvor kan I finde videoguides til softwareprogrammer?   ' ];
          
        
          for ( var i=1; i<=totalCards; i++ ) {
            $('<div><a href="#openModal'+i+'">' + words[i-1] +'</a></div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
              accept: '#cardPile div',
              hoverClass: 'hovered',
              drop: handleCardDrop
            } );
          }
        
        }
      
        function handleCardDrop( event, ui ) {
          var slotNumber = $(this).data( 'number' );
          var cardNumber = ui.draggable.data( 'number' );
          $(this).droppable( 'disable' );
          // If the card was dropped to the correct slot,
          // change the card colour, position it directly
          // on top of the slot, and prevent it being dragged
          // again
        
          if ( slotNumber == cardNumber ) {

           
            
            ui.draggable.draggable( 'option', 'revert', false );
            correctCards++;
            alert(correctCards);
          } 
          
          // If all the cards have been placed correctly then display a message
          // and reset the cards for another go
        
          if ( correctCards == totalCards ) {
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
        // Get the modal

