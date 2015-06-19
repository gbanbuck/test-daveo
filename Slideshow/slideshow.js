
	jQuery.noConflict();
  var pause=0;
  var hover = 0 ;
  var transition = 0 ;
  var select=0; 
  function cycleImages(pause){
      if(pause==0){
        //$("#testSlide .testInfo").slideUp("slow");
        
          if(jQuery('#testSlide .active:first').length > 0){
              
              if(select==2)
                select=0;
              else
                select+=1;
          }
        var $active = jQuery('#testSlide .active');
        var $next = ($active.next().length > 0) ? $active.next() : jQuery('#testSlide .ui-tabs-panel:first');
        //$next.css('z-index',2);//move the next image up the pile
        $next.fadeIn(1500,function(){
            //jQuery("#testSlide .testInfo").slideUp("slow");
             transition = 0;
        });
        
        transition = 1;
        var $nav=jQuery("#testSlide .ui-tabs-selected");
        var $nextnav = ($nav.next().length > 0) ? $nav.next() : jQuery('#testSlide .ui-tabs-nav2-item:first');
        setTimeout(function(){
          $nav.removeClass('ui-tabs-selected');
            $nav.addClass('ui-tabs-no-selected');
            $nextnav.removeClass('ui-tabs-no-selected');
            $nextnav.addClass('ui-tabs-selected');
        },'750');
        
        $active.fadeOut(1500,function(){//fade out the top image
  	        $active.removeClass('active');//reset the z-index and unhide the image
            $active.addClass('ui-tabs-hide');
            //jQuery("#testSlide .active img").attr('class', 'ui-tabs-nav2-item ui-tabs-selected');
            //alert(''+pause);
            $next.addClass('active');//make the next image the top one
            $next.removeClass('ui-tabs-hide');
            //$("#testSlide .active .testInfo").slideToggle("slow");
            //jQuery("#testSlide .active .testInfo").slideDown("slow");  
            
            
            //$nextnav.width(500);
            //jQuery("#testSlide .ui-tabs-no-selected").css("padding-left","=300px");
            //pause=1;
            //jQuery("#testSlide .ui-tabs-selected").animate({"width": "+=150px" }, "slow" ).animate({"margin-left": "-=150px" }, "slow" );
            //jQuery("#testSlide .ui-tabs-nav2-item .ui-tabs-hide").animate({"width": "=150px" }, "slow" ).animate({"margin-left": "=150px" }, "slow" );        
        }); 
          //jQuery("#testSlide .ui-tabs-selected").animate({"width": "+=150px" }, "slow" ).animate({"margin-left": "-=150px" }, "slow" ); 
        
        
      }else{}
  }
  
	$(document).ready(function(){
    jQuery("#testSlide img").mouseover(function(){
       if(pause!=1) pause=1;
    });
    jQuery("#testSlide .testInfo").mouseover(function(){
       if(pause!=1) pause=1;
    });
    jQuery("#testSlide .ui-tabs-nav2").mouseover(function(){
       if(pause!=1) pause=1;
    });
    jQuery("#testSlide").mouseout(function(){
        if(hover!=0) hover=0;
       if(pause!=0) pause=0;
    });
    setInterval(function(){cycleImages(pause);},3000);
    
          jQuery('#img-1').hover(function(){
            if(transition!=1){
                if(select!=0){
                select=0;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment1'); 
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                    var $nextnav = jQuery("#img-1");
                //$next.css('z-index',2);//move the next image up the pile
                $next.fadeIn(10,function(){
                    //jQuery("#testSlide .testInfo").slideUp("slow"); 
                     $nextnav.addClass('ui-tabs-selected');
                     $nav.removeClass('ui-tabs-selected');
                });
                
                $active.fadeOut(10,function(){//fade out the top image
                    $active.removeClass('active');//reset the z-index and unhide the image
                    $next.addClass('active');
                    $active.addClass('ui-tabs-hide');
                    //make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                    //jQuery("#testSlide .active .testInfo").slideDown("slow");  
                    
                   
                });
                 
                 pause=1;
                 }
                }   
          }); 
          jQuery('#img-1').click(function(){
            if(transition!=1){
                if(select!=0){
                select=0;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment1'); 
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                    var $nextnav = jQuery("#img-1"); 
                //$next.css('z-index',2);//move the next image up the pile
                $next.fadeIn(10,function(){
                    //jQuery("#testSlide .testInfo").slideUp("slow"); 
                     $nextnav.addClass('ui-tabs-selected');
                     $nav.removeClass('ui-tabs-selected');
                });
                
                $active.fadeOut(10,function(){//fade out the top image
                    $active.removeClass('active');//reset the z-index and unhide the image
                    $next.addClass('active');
                    $active.addClass('ui-tabs-hide');
                    //make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                    //jQuery("#testSlide .active .testInfo").slideDown("slow");  
                    
                   
                });
                
                 pause=1;  
                 }
                }   
          }); 
          
          jQuery('#img-2').hover(function(){
            if(transition!=1){
                if(select!=1){
                select=1;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment2');
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                  var $nextnav = jQuery("#img-2"); //$next.css('z-index',2);//move the next image up the pile
                
                $next.fadeIn(10,function(){
                    //$("#testSlide .testInfo").slideUp("slow"); 
                    $nextnav.addClass('ui-tabs-selected');
                    $nav.removeClass('ui-tabs-selected');
                });
                 
                $active.fadeOut(10,function(){//fade out the top image
          	        
                    $active.removeClass('active');//reset the z-index and unhide the image
                    $active.addClass('ui-tabs-hide');
                    
                    $next.addClass('active');//make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                    //$("#testSlide .active .testInfo").slideDown("slow");  
                    
                    
                });
                
                } 
                }     
          }); 
          jQuery('#img-2').click(function(){
            if(transition!=1){
                if(select!=1){
                select=1;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment2');
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                  var $nextnav = jQuery("#img-2"); //$next.css('z-index',2);//move the next image up the pile
                $next.fadeIn(10,function(){
                    //$("#testSlide .testInfo").slideUp("slow"); 
                    $nextnav.addClass('ui-tabs-selected');
                    $nav.removeClass('ui-tabs-selected');
                });
                 
                $active.fadeOut(10,function(){//fade out the top image
          	        
                    $active.removeClass('active');//reset the z-index and unhide the image
                    $active.addClass('ui-tabs-hide');
                    
                    $next.addClass('active');//make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                    //$("#testSlide .active .testInfo").slideDown("slow");  
                    
                    
                });
                
                } 
                }     
          }); 
          
          //}
          //if(hover==0 || hover==3){
          
          jQuery('#img-3').hover(function(){
                if(transition!=1){
                if(select!=2){
                select=2;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment3');  
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                    var $nextnav = jQuery("#img-3");
                //$next.css('z-index',2);//move the next image up the pile
                    
                $next.fadeIn(10,function(){
                    //$("#testSlide .testInfo").slideUp("slow");
                    $nextnav.addClass('ui-tabs-selected');
                    $nav.removeClass('ui-tabs-selected'); 
                });
                 
                $active.fadeOut(10,function(){//fade out the top image
          	       $active.removeClass('active');//reset the z-index and unhide the image
                    $active.addClass('ui-tabs-hide');
                    $next.addClass('active');//make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                   // $("#testSlide .active .testInfo").slideDown("slow");  
                    
                    
                    
                    
                });
                   
                } 
                }     
          });
          jQuery('#img-3').click(function(){
                if(transition!=1){
                if(select!=2){
                select=2;
                var $active = jQuery('#testSlide .active');
                var $next = jQuery('#fragment3');  
                var $nav=jQuery("#testSlide .ui-tabs-selected");
                    var $nextnav = jQuery("#img-3");
                //$next.css('z-index',2);//move the next image up the pile
                $next.fadeIn(10,function(){
                    //$("#testSlide .testInfo").slideUp("slow");
                    $nextnav.addClass('ui-tabs-selected');
                    $nav.removeClass('ui-tabs-selected'); 
                });
                 
                $active.fadeOut(10,function(){//fade out the top image
          	       $active.removeClass('active');//reset the z-index and unhide the image
                    $active.addClass('ui-tabs-hide');
                    $next.addClass('active');//make the next image the top one
                    $next.removeClass('ui-tabs-hide');
                    //$("#testSlide .active .testInfo").slideToggle("slow");
                   // $("#testSlide .active .testInfo").slideDown("slow");  
                    
                    
                    
                    
                });
                   
                } 
                }     
          });
         
        //  }    
          
	});
     