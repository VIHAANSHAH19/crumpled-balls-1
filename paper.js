class Paper{
    constructor() {
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }

this.body = Bodies.rectangle(100, 200,20, 20, options);
this.width =20;
this.height = 20;
World.add(world,this.body);
}
display(){
var pos =this.body.position;
//var angle = this.body.angle;
push();
rectMode(CENTER);
angleMode(RADIANS)
translate(pos.x,pos.y)
rotate(this.body.angle)

fill(234,50,0);
ellipse(0,0, this.width, this.height);
pop();
}
};