class Ground {
	constructor(x,y,w,h) {
	
		var options={
			isStatic:true			
			}

		this.x=x;
		this.y=y;
		this.w=w
		this.h=h

//creating the body required...

		this.body=Bodies.rectangle(x, y, w, h , options);

        //adding the body to the world...

 		World.add(world, this.body);

	}

    //the display function to display accordingly in the skecth.js ...

	display() {

        //the abbreviation variable for the body's position...

	var groundPosition=this.body.position;		
			push()
			translate(groundPosition.x, groundPosition.y);
			rectMode(CENTER)
		
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}
}