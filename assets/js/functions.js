

function initPage(){
	var offsetSquare;


	$('#square-explode, #square-base, #square-good').throwable({
		collisionDetection: true
	});

	function gravity() {
		console.log('gravity')
		$('#ship').throwable({
			containment: "parent",
			drag: false,
			gravity:{x:0,y:0.05},
			autostart:false,
			collisionDetection: true,
			areaDetection:[[0,0,900,400]]
		});
	}

	gravity();

	$(document).on("inarea",function (event,data){
		console.log($(data[0]) + " enter the area");
	});

	$(document).on("outarea",function (event,data){
		console.log($(data[0]) + " exit the area");

	});

	$(document).on("collision",function(event,e1,e2){
		//console.log('COLISION!!!' + event + ', e1: ' + e1.id + ', e2: ' + e2);
		/*
		switch (e1.id) {
			case "square-explode":
				console.log('BAAAADDD!!!!');
			break;
			case "square-base":
				console.log('baaaaddd!!!');
			break;
			case "square-good":
				console.log ("good");
			break;
		}
		*/
	});


	$('.control-btn').bind('mousedown', function(e) {
		console.log(e.target.id + '--' + e.target.id.substr(7))

		switch(e.target.id.substr(7)) {
			// LEFT
			case '1':
				$('#ship').throwable({
					containment: "parent",
					drag: false,
					gravity:{x:-0.3, y:-0.05},
					autostart:false,
					collisionDetection: true
				});
			break;
			// UP
			case '2':
				$('#ship').throwable({
					containment: "parent",
					drag: false,
					gravity:{x:0, y:-0.5},
					autostart:false,
					collisionDetection: true
				});
			break;
			// RIGHT
			case '3':
				$('#ship').throwable({
					containment: "parent",
					drag: false,
					gravity:{x:0.3, y:-0.05},
					autostart:false,
					collisionDetection: true
				});
			break;
			// DOWN
			case '4':
				$('#ship').throwable({
					containment: "parent",
					drag: false,
					gravity:{
						x:0, y:0.8},
					autostart:false,
					collisionDetection: true
				});
			break;
		}
		TweenMax.delayedCall(1, gravity);
		e.preventDefault();

	});

};