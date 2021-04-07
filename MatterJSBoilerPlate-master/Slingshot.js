class Slingshot{
	constructor(body,anchor) {
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.005, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.Slingshot=Constraint.create(options);
		World.add(world,this.Slingshot);
	}

//the attach function to attach the class to the created body...

	attach(body){
		this.Slingshot.bodyA=body;
	}

    //the fly function to be executed after the mouse is released...

	fly() {

	// setting the positon to null to disable the main control... 

		this.Slingshot.bodyA=null;
	}

//the display function that is later to be mentioned in sketch.js ...

	display() {
	
		if(this.Slingshot.bodyA) {
		
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);	

            //the line that attaches everything...

			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}