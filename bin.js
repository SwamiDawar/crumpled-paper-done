class Bin {
    constructor(x, y, width, height){
        var options = {
            'isStatic': true,
            'friction': 0.5,
            'density': 1.2
        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('paper.png');
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
    }
}