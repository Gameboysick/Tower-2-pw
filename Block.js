class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibilty =255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var angle =this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y)
        Rotate(angle)
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      pop()
      }else{
World.remove(world,this.body);
push();
this.visibilty =this.visibilty -5;
pop();



      }
    }
}