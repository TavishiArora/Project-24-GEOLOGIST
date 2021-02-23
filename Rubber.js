class Rubber {
    constructor(x, y) {
      var options = {
          
          'restitution':0.3,
          'friction':5,
          'density':1
          
      }
      this.body = Bodies.circle(x, y, 4, options);
      this.width = 55;
      this.height = 55;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke ("black");
      fill("blue");
      ellipseMode(0, 0, this.width, this.height);
      //pop();
    }
  };
