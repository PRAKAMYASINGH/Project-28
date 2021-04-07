class Stone {
	constructor(x,y,r) {
	
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}

		this.x=x;
		this.y=y;
		this.r=r

//loading the image to the class...

		this.image=loadImage("images/stone.png");

        //creating a circular body with suitable parameters...

		this.body=Bodies.circle(this.x, this.y, this.r/2, options);

        //adding the created body to the world...

		World.add(world, this.body);

	}

//the display function to mention in sketch.js ...

	display() {
	
// the abbreviation variable for the position of the class...

			var stonePosition=this.body.position;		
			push()
			translate(stonePosition.x, stonePosition.y);
	fill(255,0,255);
			imageMode(CENTER);

            //setting the created ellipse body's mode to radius...

			ellipseMode(RADIUS)
            
            //setting the loaded image's positions and widths & heights according to our class...

			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}