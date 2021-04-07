class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;

		this.carrierWidth=445;
		this.carrierHeight=590;
		this.carrierThickness=20;
		
        //loading the image for the Tree class...

		this.image=loadImage("images/tree.png")

        //setting the positions, widths and heights of the bodies...
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.carrierWidth, this.carrierThickness, {isStatic:true})
		
        this.leftWallBody=Bodies.rectangle(0, this.y-this.carrierHeight/2, this.carrierThickness, this.carrierHeight, {isStatic:false})
		
        this.rightWallBody=Bodies.rectangle(this.x+this.carrierWidth/2, this.y-this.carrierHeight/2, this.carrierThickness, this.carrierHeight, {isStatic:false})
		
//adding all the bodies to the world...

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}

//the display function that is to be mentioned in sketch.js ...

	display() {
	
// the variable used as an abbreviation for the position of the bottomBody's position...

			var bottomPosition=this.bottomBody.position;
			push()
			translate(bottomPosition.x, bottomPosition.y+10);
			fill(255)

//the arguments to move the imageMode to centre & the second for the x, y, width and height acc.to the carrier...
			imageMode(CENTER);
			image(this.image, 0,-this.carrierHeight/2,this.carriernWidth, this.carrierHeight)
			pop()
			
	}

}