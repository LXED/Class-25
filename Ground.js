class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = 50;
      this.image = loadImage("sprites/ground.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     // fill("brown");
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image,600,400,this.width,this.height);
    }
  };