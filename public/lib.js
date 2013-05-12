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

Checked = can.Control({
	init: function(){
		this.check()
	},
	"{value} change": "check",
	check: function(){
		if(this.element.prop("type") == "checkbox"){
			
			this.element.prop("checked", !!this.options.value() )
			
		} else {
			if(this.options.value() === this.element.val()){
				this.element.prop("checked", true)
			} else {
				this.element.prop("checked", false)
			}
		}
		
		
	},
	"change": function(){
		if(this.element.prop("type") == "checkbox"){
			this.options.value( !!this.element.is(":checked") );
		} else {
			if(this.element.is(":checked")){
				this.options.value(this.element.val())
			}
		}
		
	}
});

can.Mustache.registerHelper('checked', function(value){
    return function(el){
        new Checked(el, {value: value});
    }
});

})();

NullChecked = can.Control({
	init: function(){
		this.check()
	},
	"{value} change": "check",
	check: function(){
		if( this.options.value() === null || this.options.value() === undefined){
			this.element.html("-")
		} else if(this.options.value()){
			this.element.html("<input type='checkbox' CHECKED>")
		} else {
			this.element.html("<input type='checkbox'>")
		}
	},
	"click": function(){
		var value = this.options.value;
		if( value() === null || value() === undefined){
			value(true)
		} else if(this.options.value()){
			value(false)
		} else {
			value(null)
		}
	}
});


(function(){

var Value = can.Control({
	init: function(){
		if(this.element.prop('nodeName').toUpperCase() === "SELECT"){
			// need to wait until end of turn ...
			setTimeout($.proxy(this.set,this),1)
		} else {
			this.set()
		}
		
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

InlineTextEdit = can.Control({
	init: function(){
		this.element.addClass('inline-edit');
		if(this.element.prop('nodeName').toUpperCase() === "SELECT"){
			// need to wait until end of turn ...
			setTimeout($.proxy(this.set,this),1)
		} else {
			this.set()
		}
		
	},
	"{value} change": "set",
	set: function(){
		var val = this.options.value();
		if(val){
			this.element.text(val)
		} else {
			this.element.html("&nbsp;&nbsp;&nbsp;")
		}
	},
	"click": function(el, ev){
		if(ev.target.nodeName.toLowerCase() != "input"){
			var input = $("<input type='text' value='"+(this.options.value()||'')+"'/>");
			this.element.html(input);
			setTimeout(function(){
				
				input.focus()	
			})
		}
		
	},
	"focusout" : function(){
		this.options.value(this.element.find('input').val());
		this.element.text(this.options.value())
	}
});

(function(){
	
var FadeInWhen = can.Control({
	setup: function(){
		return can.Control.prototype.setup.apply(this, arguments)
	},
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

Attendee = can.Model({
	findAll: "/attendees",
	create: "/attendees",
	update: "POST /attendees/{id}",
	create: "POST attendee",
	destroy: "POST /attendees/{id}/destroy"
},{
	setHeadofhouseid: function(newVal){
		if(newVal || newVal == "0"){
			return +newVal
		} else {
			return newVal
		}
	},
	headOfHouse: function(){
		if(typeof this.attr('headofhouseid') == 'number'){
			return this.constructor.store[this.attr('headofhouseid')].attr('name')
		} else {
			return this.attr('name')
		}
	}
})
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


AttendeeControl = can.Control({
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
		
		var attendee = self.options.attendee;
		
		
		if(!attendee.attr('country')){
			attendee.attr('country',"USA")
		}
		
		
		var countryNames = function(){
			return names[(attendee.attr('country')).toLowerCase()]
		};
		cityOrState = can.compute(function(){
				return attendee.attr('state') || 
				       attendee.attr('city') || 
				       (attendee.attr('country') && 
				        attendee.attr('country') !== "USA" )
			})
			
		
		el.html(can.view("attendee.mustache",{
			attendee: attendee,
			statePlaceholder: can.compute(function(){
				return countryNames().state
			}),
			zipPlaceholder: can.compute(function(){
				return countryNames().zip
			}),
			cityOrStateSetOrCountryNotUSA: cityOrState,
			attendees: this.options.attendees
		}));
			
			
		
		
	},
	suggestCityAndState: function(value){
		var el = this.element.find("[name=zip]"),
			value = el.val();
		
		if( value && ( isNaN( parseInt(value) ) )   ){
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
	"[name=headofhouseid] change": function(el){
		var id = el.val(),
			head;
		// fill in address with primary
		for(var i = 0; i < this.options.attendees.length; i++){
			head = this.options.attendees[i]
			if(id == head.id){
				this.options.attendee.attr({
					street: head.street,
					apt: head.apt,
					zip: head.zip,
					city: head.city,
					state: head.state
				})
			}
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
		},function(){
			$("[type=submit]").val("Try Again (something went wrong)").removeProp("disabled");
		})
	}
})

