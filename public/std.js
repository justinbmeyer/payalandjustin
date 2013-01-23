(function(){
var images = ['ferris.jpg','scooter.jpg','phuket.jpg','halloween.jpg','fireworks-clean.jpg'],
	deferreds = [],
	getDeferred = function(i){
		if(deferreds[i]){
			return deferreds[i];
		}
		deferreds[i] = $.Deferred();
		var image = new Image();
		image.onload = function(){
			deferreds[i].resolve(image)
		}
		image.src =images[i];
		return deferreds[i];
	};
	;


var showing = 0,
	transition = function(){
		getDeferred(showing).then(function(img){
			showing++;
			if(showing == images.length){
				showing = 0;
			}
			getDeferred(showing);
			$("#background").css("background-image",'url('+img.src+')')
				.fadeIn('slow',function(){
					setTimeout(function(){
						getDeferred(showing).then(function(){
							$("#background").fadeOut('slow',function(){
								transition();
							})
						})
					},4000)
				})
			})
	};
	transition();



// form behavior

var toggleAddress = function(){
	return;
	if( $("[name=attending][value=true]").prop("checked") ){
		$("#address").stop().slideDown();
		
		if( $("[name=name]").val() ){
			$("[name=street]").focus()
		} else {
			$("[name=name]").focus()
		}
	} else if( $("[name=attending][value=false]").prop("checked") ) {
		$("#address").stop().slideUp()
	}
}

$(document.body).on("change","[name=attending]", toggleAddress)
toggleAddress();

var names = {
	usa: {
		city: "city",
		state: "state",
		zip: "zip code"
	},
	india: {
		state: "state",
		zip: "postal code"
	},
	canada: {
		state: "providence",
		zip: "postal code"
	}
}

var getCountry = function(){
	var val
	$("[name=country]").each(function(){
		if($(this).prop('checked')){
			val = $(this).val().toLowerCase()
		}
	});
	return val;
}

var toggleCountry = function(){
	var val = getCountry();
	
	$("[name=zip]").attr('placeholder', names[val].zip);
	$("[name=state]").attr('placeholder', names[val].state);
	
	if(val === 'usa'){
		var hasValue = false;
		$(".zip-dependent").each(function(){
			if(this.value){
				hasValue = true;
			}
		});
		if(hasValue){
			$(".zip-dependent").fadeIn()
		} else {
			$(".zip-dependent").hide()
		}
	} else {
		$(".zip-dependent").show()
	}
}
$(document.body).on("change","[name=country]", toggleCountry)
toggleCountry()


$("[name=zip]").bind("keyup", function(){
	if( this.value && ( parseInt(this.value)+"" != this.value )   ){
		$(this).addClass("error");
		return;
	} else {
		$(this).removeClass("error")
	}
	
	if( $("[name=country][value=USA]").prop('checked')  && this.value.length === 5){
		
		$.get("http://gomashup.com/json.php?fds=geo/usa/zipcode/"+this.value,{},function(data){

			$(".zip-dependent").fadeIn()
			//$(".zip-dependent").slideDown()
			if(data.result[0]){
				$("[name=city]").val(data.result[0].City);
				$("[name=state]").val(data.result[0].State)
			}
		},"jsonp")
		
	}
	
	
});

$("#create_attendee").submit(function(ev){
	var error = false;
	// check name
	if( !$("[name=name]").val() ){
		$("[name=name]").addClass("error");
		error = true;
	} else {
		$("[name=name]").removeClass("error");
	}
	// check available
	/*if( $("[name=attending][value=false]").prop("checked") ) {
		$("#attending").removeClass("error");
	} else {
		$("#attending").removeClass("error");*/
		
	// check country
	if( !getCountry() ){
		$("#country").addClass('error')
		error = true
	} else {
		$("#country").removeClass('error')
	}
	$.each(["street","city","state","zip"], function(i, name){
		if( $('[name='+name+']').val() ){
			$('[name='+name+']').removeClass('error')
		} else {
			$('[name='+name+']').addClass('error');
			error = true;
		}
	})
		// check street, city, state, zip
		
		
	//} 
	ev.preventDefault()
	if(error){
		return
	}
	
	if( $("[type=submit]").val() == "Submit" ){
		$("[type=submit]").val("Submitting...").prop("disabled",true)
	} else {
		$("[type=submit]").val("Updating...").prop("disabled",true)
	}
	
	
	$.post("/attendees", $(this).serialize(), function(){
		$("[type=submit]").val("Update").removeProp("disabled");
		$("#thanks").fadeIn("slow",function(){
			var el = this;
			setTimeout(function(){
				$(el).fadeOut("slow")
			},2000)
			
		})
	})
	
	
	
})


})();