class Mango{
	constructor(x,y,r) {
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}

		this.x=x;
		this.y=y;
		this.r=r

        // loading the image fo the class...

		this.image=loadImage("images/mango.png")

        //creating a circular body with proper parameters...

		this.body=Bodies.circle(this.x, this.y, this.r, options)

        //adding this body to the world...

		World.add(world, this.body);
	}

	display()
	{
		var mangoPosition=this.body.position;	
		push()
		translate(mangoPosition.x, mangoPosition.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);

        //setting the  assigned image's positions and required parameters...

		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 
}