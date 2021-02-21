class Mango{
   constructor(x, y){
      var options = {
          isStatic : true,
          restitution : 0,
          friction : 1
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.r = 40;
      this.image = loadImage('mango.png');
      World.add(world, this.body);

   }
   display(){
       var fruit = this.body.position;

       imageMode(CENTER);;
       image(this.image, fruit.x, fruit.y, this.r, this.r);
   }

}