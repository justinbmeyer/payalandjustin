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


(function(){
	var placeholderSupported = "placeholder" in document.createElement("input")

    Placeholder = can.Control({
        init: function(element, options) {
            if( placeholderSupported ) {
            	this.element.attr('placeholder', this.options.placeholder() );   
            } else {
                if( this.element.val() === '' ) {
                    this.addPlaceholder(); 
                } else {
                	this.changed = true;
                }
            }
        },
        addPlaceholder: function(){
            this.element.val(this.options.placeholder()) 
            	.addClass('placeholder');
            this.changed = false;
        },
        removePlaceholder: function(){
        		this.element.val("").removeClass('placeholder');
        },
        'focus': function(el, ev) {
            if( ! placeholderSupported && !this.changed ) {
                if(  this.element.val() === this.options.placeholder() ) {
                		this.removePlaceholder();
                }
            }
        },
        'blur': function(){
            if( !placeholderSupported ) {
                if( this.element.val() === '' ) {
                		this.addPlaceholder();
                }
            }
        },
        "{value} change": function(value, ev, newVal, oldVal){
        		if( !placeholderSupported && newVal) {
        			this.element.removeClass('placeholder');
    			}
        },
        "{placeholder} change": function(placeholder, ev, newVal, oldVal){
            if( placeholderSupported ) {
                this.element.attr('placeholder', newVal)
            } else {
                if( !this.changed && !this.isFocused() ) {
                    this.element.val(newVal);
                }
            }
        },
        "change" : function(){
        		this.changed = (this.element.val() !== "");
        },
        isFocused: function(){
        		return document.activeElement === this.element[0];   
        }
    });
    
    can.Mustache.registerHelper('placeholder', function(placeholder, value){
        return function(el){
        		if(typeof placeholder === "string"){
        			placeholder = can.compute(placeholder);
        		}
            new Placeholder(el, {
            		placeholder: placeholder,
            		value: value
            	});
        }
    });
})();

(function(){

var Checked = can.Control({
	init: function(){
		this.check()
	},
	"{value} change": "check",
	check: function(){
		if(this.options.value() === this.element.val()){
			this.element.prop("checked", true)
		} else {
			this.element.prop("checked", false)
		}
	},
	"change": function(){
		if(this.element.is(":checked")){
			this.options.value(this.element.val())
		}
	}
})

can.Mustache.registerHelper('checked', function(value){
    return function(el){
        new Checked(el, {value: value});
    }
});

})();

(function(){

var Value = can.Control({
	init: function(){
		this.set()
	},
	"{value} change": "set",
	set: function(){
		this.element.val(this.options.value())
	},
	"change": function(){
		this.options.value(this.element.val())
	}
})

can.Mustache.registerHelper('value', function(value){
    return function(el){
        new Value(el, {value: value});
    }
});

})();


(function(){
	
var FadeInWhen = can.Control({
	init: function(){
		if(this.options.value()){
			this.element.show();
		} else {
			this.element.hide()
		}
	},
	"{value} change": function(value, ev, newVal){
		if( newVal ) {
			this.element.fadeIn();
		} else {
			this.element.hide()
		}
	}
});

can.Mustache.registerHelper('fadeInWhen', function(value){
    return function(el){
        new FadeInWhen(el, {value: value});
    }
});
	
})();

var Attendee = can.Model({
	findOne: "attendee",
	update: "POST attendee",
	create: "POST attendee"
},{});

Location = can.Model({
	findAll: function(params){
		return $.get("http://gomashup.com/json.php?fds=geo/usa/zipcode/"+params.zipcode,
			{},
			function(){},
			"jsonp")
			.pipe(function(data){
				return data.result
			})
	}
},{});

var AttendeeControl = can.Control({
	init: function(el){
		
		var names = {
			usa: {
				state: "state",
				zip: "zip code"
			},
			india: {
				state: "state",
				zip: "postal code"
			},
			canada: {
				state: "province",
				zip: "postal code"
			}
		},
			self = this;
		
		Attendee.findOne({}, function(attendee){
			if(!attendee.attr('country')){
				attendee.attr('country',"USA")
			}
			
			
			var countryNames = function(){
				return names[(attendee.attr('country')).toLowerCase()]
			};
			
			el.html(can.view("attendee.mustache",{
				attendee: attendee,
				statePlaceholder: can.compute(function(){
					return countryNames().state
				}),
				zipPlaceholder: can.compute(function(){
					return countryNames().zip
				}),
				cityOrStateSetOrCountryNotUSA: can.compute(function(){
					return attendee.attr('state') || 
					       attendee.attr('city') || 
					       (attendee.attr('country') && 
					        attendee.attr('country') !== "USA" )
				})
			}));
			
			self.options.attendee = attendee;
			self.on();
		});
	},
	suggestCityAndState: function(value){
		var el = this.element.find("[name=zip]"),
			value = el.val();
		
		if( value && ( parseInt(value)+"" != value )   ){
			el.addClass("error");
			return;
		} else {
			el.removeClass("error")
		}
		
		if( this.options.attendee.country === "USA" && value.length === 5){
			
			Location.findAll({zipcode: value}, $.proxy(function(locations){
				this.options.attendee
					.attr('city',locations[0].City)
					.attr('state',locations[0].State)
				
			}, this))
		}
	},
	"[name=zip] keyup": "suggestCityAndState",
	"[name=zip] keydown": "suggestCityAndState",
	"submit": function(el, ev){
		var error = false,
			attendee = this.options.attendee;
		// check name
		if( !attendee.name ){
			this.element.find("[name=name]").addClass("error");
			error = true;
		}else {
			this.element.find("[name=name]").removeClass("error");
		}
			
			
		$.each(["street","city","state","zip"], function(i, name){
			if( attendee[name] ){
				el.find('[name='+name+']').removeClass('error')
			} else {
				el.find('[name='+name+']').addClass('error');
				error = true;
			}
		})

		ev.preventDefault()
		if(error){
			return;
		}
			
		if( $("[type=submit]").val() == "Submit" ){
			$("[type=submit]").val("Submitting...").prop("disabled",true)
		} else {
			$("[type=submit]").val("Updating...").prop("disabled",true)
		}
		
		attendee.save(function(){
			$("[type=submit]").val("Update").removeProp("disabled");
			$("#thanks").fadeIn("slow",function(){
				var el = this;
				setTimeout(function(){
					$(el).fadeOut("slow")
				},2000)
				
			})
		})
	}
})

new AttendeeControl("#create_attendee")








})();






