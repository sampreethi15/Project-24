class Stone{
    constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var stone_options = {
		restitution:0.8,
        friction:0.9,
        density:12

	}
		this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, stone_options);
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
           	stroke("black");
			fill("red");
			rect(0, 0, this.width, this.height);
			pop();
	}
};