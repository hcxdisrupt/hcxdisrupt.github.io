

/**	1. PRELOADER
 *****************************************************/
$(window).load(function() {
	
	  setTimeout(function() {
		$('.spinner,#prelaoder img').fadeOut("slow");
			
		  setTimeout(function() {
		  $('#prelaoder').fadeOut("slow");
		  
			  setTimeout(function() {
				  $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
			       $('#footer').fadeIn('slow');
				   
			  }, 900);
		  }, 1000);	  
	  }, 1000);	
  
});

/**	2. TUBULAR
 *****************************************************/
$(document).ready( function(){
	
	var options = { videoId: 'Gy4IdF-ZD2M' };
	$('body').tubular(options);
	
	$('#tubular-container').css('z-index','-1');
    $('#tubular-shield').css('z-index','-1');

});

/**	3. CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('#slider').cycle({
		fx : 'fade',
		timeout: 5500,
		speed: 700,
		slides: '.slide'
	});
	
});

/**	4. OVERLAY
 *****************************************************/
$(document).ready( function(){

	var openBtn = ( '#open-overlay' ),
	    closeBtn = ( '#close-overlay' ),
		
		openBtnContact = ( '#open-contact' ),
	    closeBtnContact = ( '#close-contact' ),
		
		mainContent = ( '.content-block' ),
		mainContentFade = ( '#footer,#home' ),
		patternID = ( '#bg-pattern' ),
		
	    overlayID = ( '#overlay' ),
		overlayAboutID = ( '#overlay-about,#open-contact' ),
		overlayContactID = ( '#overlay-contact' ),
		
		ContentLeaveAnimation = ( 'animated fadeOutDown' ),
		ContentEnterAnimation = ( 'animated fadeInDown' ),
		
		OverlayContentOpenAnimation = ( 'animated fadeInUpBig' ),
		OverlayContentCloseAnimation = ( 'animated fadeOutDownBig' );
		
		ContactBtnOpenAnimation = ( 'animated fadeOutDownBig' ),
		ContactBtnCloseAnimation = ( 'animated fadeInDown' );
		
		
		
		$(openBtnContact).tooltip({ title: 'Contact'})
			  
		$(openBtn).click(function() {
		  
		  $(mainContent).removeClass(ContentEnterAnimation).addClass(ContentLeaveAnimation).fadeOut('slow');
		  $(mainContentFade).fadeOut('slow');
		  $(patternID).fadeOut('slow');
			   
			  setTimeout(function() {
				$(overlayID).fadeIn('slow');
				
				  setTimeout(function() {
					$(overlayAboutID).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow'); 
					  
				  }, 500);
			  }, 650);
	    });
		
		
		$(closeBtn).click(function() {
			
		  $(overlayAboutID).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow'); ;
		  
			  setTimeout(function() {
				$(overlayID).fadeOut('slow');
				
				  setTimeout(function() {
					$(mainContent).removeClass(ContentLeaveAnimation).addClass(ContentEnterAnimation).fadeIn('slow');
					$(mainContentFade).fadeIn('slow');
					$(patternID).fadeIn('slow');
					
				  }, 900);
			  }, 700);

	    });
		
		
		$(openBtnContact).click(function() {
			$(openBtnContact).tooltip('hide')
			$(openBtnContact).removeClass(ContactBtnCloseAnimation).addClass(ContactBtnOpenAnimation);
			$(overlayContactID).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow')
			;
			 setTimeout(function() {
					$(closeBtnContact).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow')
					   
			  }, 800);
	    });
		
		
		$(closeBtnContact).click(function() {
			
			$(closeBtnContact).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow');
			
			setTimeout(function() {
				   $(overlayContactID).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow');  
                   $(openBtnContact).removeClass(ContactBtnOpenAnimation).addClass(ContactBtnCloseAnimation);
				   
			  }, 200);
	    });

});

