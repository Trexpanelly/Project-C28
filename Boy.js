class Boy {
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('boy.png');
        World.add(world, this.body)
    }
    display(){
        var standinplace = this.body.position;

        imageMode(CENTER);
        image(this.image, standinplace.x, standinplace.y, this.width, this.height);
    }
}