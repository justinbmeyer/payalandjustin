can.route(":page",{
	page: "events"
})


$("#navigation").html(
	can.view("navEJS",{},{
		selected: function(name){
			if(can.route.attr('page') === name){
				return "class='active'"
			}
		}
	})
)
$("#contents").children().hide()
can.route.bind("page",function(ev, newVal, oldVal){
	$("#"+oldVal).hide();
	$("#"+newVal).show();
})
