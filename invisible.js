class Covering{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
  }
  display(){
    push();
    rectMode(CENTER);
    noFill();
    stroke("black");
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
  move(){
    this.x=this.x+1;
  }
}