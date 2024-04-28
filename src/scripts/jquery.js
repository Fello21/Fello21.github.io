$(".navig__title").on("click", function() {
    if ( $( ".navig__list" ).is( ":hidden" ) ) {
        $( ".navig__list" ).slideDown( "slow" );
      } else {
        $( ".navig__list" ).slideUp();
      }  
});