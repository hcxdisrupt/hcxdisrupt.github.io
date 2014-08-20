

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
		speed: 500,
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


/**	7. GOOGLE ANALYTICS
 *****************************************************/
$(document).ready( function(){
	
	var google_analytics_id = 'UA-48390919-1';  // Enter your ID here. like this: UA-2121212-22
		  
		  if(google_analytics_id != '') {
			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', google_analytics_id]);
			  _gaq.push(['_trackPageview']);
			  
			  (function() {
			  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
		  }	
		  
});