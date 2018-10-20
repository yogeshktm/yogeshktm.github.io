$(document).ready(function() {
	$(".wrapper").onepage_scroll();
});


			 	$(".main-menu a[href='#aboutMe']").click(function(){
				 $(".wrapper").moveTo(1);
			});
      $(".main-menu a[href='#works']").click(function(){
        $(".wrapper").moveTo(2);
    });
			 	$(".menu a[href='#my-works']").click(function(){
				$(".main").moveTo(4);
			});
			 	$(".menu a[href='#get-in-touch']").click(function(){
				$(".main").moveTo(5);
			});
