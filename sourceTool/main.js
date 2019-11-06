
function show(id) {
  document.getElementById(id).style.visibility = "visible";
};
function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
};

  
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
              ask: '<h3>Source 1</h3><a class="example-image-link target" href="images/reklame2.png" data-lightbox="example-1"><img class="example-image" src="images/reklame2.png" alt="image-1" /></a>'
            },
            {
              number: 2,
              ask: '<h3>Source 2</h3><a class="example-image-link" href="images/reklame.jpg" data-lightbox="example-3"><img class="example-image" src="images/reklame.jpg" alt="image-1" /></a>'
            },
            {
              number: 3,
              ask: '<h3>Source 3</h3><a class="example-image-link" href="images/fagblad.jpg" data-lightbox="example-2"><img class="example-image" src="images/fagblad.jpg" alt="image-1" /></a>'
            },
            {
              number: 4,
              ask: '<h3>Source 4</h3><a class="example-image-link" href="images/videnskabelig.jpg" data-lightbox="example-4"><img class="example-image" src="images/videnskabelig.jpg" alt="image-1" /></a>'
            },
            {
              number: 5,
              ask: '<h3>Source 5</h3><a class="example-image-link" href="images/formidlende.jpg" data-lightbox="example-5"><img class="example-image" src="images/formidlende.jpg" alt="image-1" /></a>'
            },
            {
              number: 6,
              ask: '<h3>Source 6</h3><a class="example-image-link" href="images/blog.png" data-lightbox="example-6"><img class="example-image" src="images/blog.png" alt="image-1" /></a>'
            }
            
          ];
          var globalAmount = 6;
          

              
                   
          questions.sort( function() { return Math.random() - .5 } );
              
        // card fill magic
          for ( var ai=0; ai<globalAmount; ai++ ) {
            
            $('<div ondragend="dragEnd(event);" data-lightbox="image-'+ai+'">' + questions[ai].ask+'</div>').data( 'number', questions[ai].number ).attr( 'id', 'card'+questions[ai].number).appendTo( '#cardPile' ).draggable( {
              
              stack: '#cardPile div',
              cursor: 'move',
              revert: false
            } );
          }
           
        
        

          
          

      

          // Create the card slots
          var words = [ '', '', ''];
          for ( var i=1; i<=3; i++ ) {
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

        var progressCheck = 0; 
        function dragEnd(event){
         
         progressCheck++;
         if(progressCheck == questions.length){
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
