class Box
{
constructor(x,y,width,height)
{
    var ball_options =  {
                            restitution: 2.0
                        }

    this.ball = Bodies.rectangle(x,y,width,height, ball_options);
    this.width=width;
    this.height=height;
    World.add(world,this.ball);
}

display()
{
    var pos = this.ball.position;
    var angle= this.ball.angle;
    push();
    rotate(angle);
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}}

