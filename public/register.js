var family = can.compute();
		
Search = can.Control({
	init: function(){
		// map attendees family
		var families = this.families = {};
		var makeById = function(id){
			if( !families[id] ) {
				families[id] = {children: []}
			}
			return families[id];
		};
		
		this.options.attendees.each(function(attendee){
			if(typeof attendee.headofhouseid == 'number'){
				makeById(attendee.headofhouseid).children.push(attendee)
			} else {
				makeById(attendee.id).head = attendee
			}
		})
		this.options.results = new can.Observe.List()
		this.element.html(can.view("search.mustache",this.options))
	},
	getFamily: function(attendee){
		if(typeof attendee.headofhouseid == 'number'){
			return this.families[attendee.headofhouseid]
		} else {
			return this.families[attendee.id]
		}
	},
	"input keypress": "updateResults",
	"input keyup": "updateResults",
	updateResults: function(){
		var self = this;
		// grouped by family id
		var newResults = {},
			value = this.element.find('input').val();
			
		if(!value){
			this.options.results.replace([])
		}
			
		this.options.attendees.each(function(attendee){
			if( attendee.name.toLowerCase().indexOf(value.toLowerCase()) >= 0 ){
				var family = self.getFamily(attendee)
				newResults[family.head.id] = family
			}
		})
		var results = [];
		
		for(var id in newResults){
			var res = newResults[id];
			
			results.push({
				familyStructure: res,
				text: can.map([res.head].concat(res.children), function(attendee){
					return attendee.name || "Guest"
				}).join(", ")
			})
		}
		this.options.results.replace(results)
	},
	"li click": function(el){
		var struture = el.data('result').familyStructure;
		
		this.options.family(  [struture.head].concat(can.makeArray(struture.children)) )
	}
});

Attendee.findAll({}, function(attendees){
	
	/*new Search("#search",{
		attendees: attendees,
		family: family
	})*/

	// group everything into families
	var families = {};
	var makeById = function(id){
		if( !families[id] ) {
			families[id] = {children: []}
		}
		return families[id];
	};
	attendees.each(function(attendee){
		if(typeof attendee.headofhouseid == 'number' && attendee.headofhouseid !== attendee.id){
			makeById(attendee.headofhouseid).children.push(attendee)
		} else {
			makeById(attendee.id).head = attendee
		}
	});
	
	var familyNames = {},
		familyNamesArr = [];
	for(var id in families){
		var familyObject = families[id];
		
		var name = can.map([familyObject.head].concat(familyObject.children), function(attendee){
			return attendee.name || "Guest"
		}).join(", ");
		
		familyNames[name] = familyObject;
		familyNamesArr.push(name)
	}
	
	
	$("#search").typeahead({
		source : familyNamesArr,
		updater: function(item){
			var familyObject = familyNames[item]
			
			family( [familyObject.head].concat(can.makeArray(familyObject.children))  );
			return item;
		}
	});
	
	$("#search").on("keyup",function(){
		if(!familyNames[$("#search").val()]){
			family(null)
		}
	})
	
	
	if(familyNames[$("#search").val()]){
		var familyObject = familyNames[$("#search").val()]
		family( [familyObject.head].concat(can.makeArray(familyObject.children))  );
	}
	
	new Placeholder("#search",{
		placeholder: can.compute("Search for your name")
	});

});

var updateSearchIcon = function(){
	if(family()){
		$("#searchIcon").removeClass('icon-search')
			.addClass('icon-ok').parent().addClass('btn-success')
	} else {
		$("#searchIcon").addClass('icon-search')
			.removeClass('icon-ok').parent().removeClass('btn-success')
	}
}
updateSearchIcon();
family.bind("change",updateSearchIcon)

can.Mustache.registerHelper('time', function(date){
	var hour = date.getHours();
	var min = date.getMinutes();
	if(min < 10){
		min = "0"+min;
	}
	if(hour > 12){
		return (hour-12)+":"+min+" pm"
	} else {
		return (hour)+":"+min+" am"
	}
})
can.Mustache.registerHelper('rsvp', function(attendee){
	var name = this.name,
		coming = false;
	if( !attendee.attr("invitedto"+name) ){
		return ""
	}
	var checkbox = "<input type='checkbox' name='"+name+"' ";
	if( attendee.attr("comingto"+name) === true){
		coming = true
	} else if( attendee.attr("comingto"+name) === false ){
		coming = false
	} else if( attendee.attr("attending") === true ) {
		coming = true
	} else {

	}
	if(coming){
		checkbox += "CHECKED"
	}
	
	checkbox += "/> ";
	
	
	
	return "<div class='"+
		(coming ? "coming success" : "regrets") 
		+"'>" + checkbox + 
		(coming ? "attending" : "regrets") +"</div>";
})

can.Mustache.registerHelper('status', function(attendee){
	var name = this.name,
		coming = false;
	if( !attendee.attr("invitedto"+name) ){
		return "na"
	}
	
	if( attendee.attr("comingto"+name) === true){
		coming = true
	} else if( attendee.attr("comingto"+name) === false ){
		coming = false
	} else if( attendee.attr("attending") === true ) {
		coming = true
	} else {

	}
	if(coming){
		return "success"
	} else {
		return "error"
	}
})


var RegisterFamily = can.Control({
	"{family} change": function(fam, ev, family){
		
		if(!family || !family.length){
			this.element.html("");
			return;
		}
		var eventNames = ["manglik", "mehndi","wedding"],
			days = {
				1: {
					date: "Friday Aug 9th",
					count: 0,
					day: 1
				},
				2: {
					date: "Saturday Aug 10th",
					count: 0,
					day: 2
				}
			}
		
		var events = {
			manglik: {
				date: new Date(2013, 7, 9, 10, 30),
				day: 1,
				title: "Manglik Prasang",
				invites: 0
			},
			mehndi: {
				date: new Date(2013, 7, 9, 17, 30),
				day: 1,
				title: "Mehndi",
				invites: 0
			},
			wedding: {
				date: new Date(2013, 7, 10, 16, 0),
				day: 2,
				title: "Wedding & Reception",
				invites: 0
			}
		};
		
		can.each(family, function(attendee){
			for(var name in events){
				if( attendee["invitedto"+name] ){
					events[name].invites++
				}
			}
		})
		
		var eventList = [];
		for(var name in events){
			
			events[name].name = name;
			
			if(events[name].invites){
				eventList.push(events[name])
				days[ events[name].day ].count++
			}
		}
		
		var dayList = [];
		for( dayNum in days){
			if(days[dayNum].count){
				dayList.push(days[dayNum])
			}
		}
		
		var instructions = can.compute(function(){
			var guests = 0;
			can.each(family,function(attendee){
				if(attendee.attr('name').toLowerCase() == "guest"){
					guests++;
				}
			})
			
			if(guests){
				return "Please name your "+(guests>1 ? "guests":"guest")+", check the boxes for the events you will be attending and click the submit button:"
			} else {
				return "Please check the boxes for the events you will be attending and click the submit button:"
			}
			
		})
		
		this.element.html(
			can.view("register.mustache",{
				instructions: instructions,
				family: can.map(family, function(attendee){
					return {attendee: attendee}
				}),
				dates: dayList,
				events: eventList
			})
		);
	},
	".event-attendence click": function(el){
		if(el.hasClass('na')){
			return;
		}
		var attendee = el.closest('tr').data('attendee')
		var prop = el.find('input').attr("name"),
			cur = el.hasClass('success');
		
		attendee.attr("comingto"+prop, !cur)
		
	},
	"submit" : function(el, ev){
		ev.preventDefault();
		var defs = [];
		var attendees = this.options.family();
		can.each(attendees, function(attendee){
			defs.push(attendee.save())
		})
		$("#rsvp-button").val("Submitting").prop("disabled", true)
		$.when.apply($,defs).then(function(){
			$("#rsvp-button").val("Update RSVP").prop("disabled", false);
			
			$("#thankyou").fadeIn(function(){
				setTimeout(function(){
					$("#thankyou").fadeOut()
				},2000)
			})
		})
	},
	".name-value click": function(el, ev){
		el.hide();
		if( el.next().val().toLowerCase() == "guest" ){
			el.next().val("")
		}
		
		el.next().show().focus()
	},
	".name-edit focusout": function(el){
		el.hide();
		el.prev().show()
	}
})




new RegisterFamily("#family-register",{
	family: family
})