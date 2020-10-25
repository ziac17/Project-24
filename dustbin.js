class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true, 
      }
      this.body = Bodies.rectangle(200,300, width, height, options);
      this.body = Bodies.rectangle(500, 600, 10, 20, options);
      this.body = Bodies.rectangle(200, 100, 10, 20, options);
  
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(405, 582, 200, 15);
      rect(310, 545, 15, 90);
      rect(510,545, 15, 90);
      pop();
    }
  };
  