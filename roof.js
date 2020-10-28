
class Roof{
    constructor(x,y){
        
        this.bottomBody=Bodies.rectangle(x,y, 200, 20, {isStatic:true});
      
       
        World.add(world, this.bottomBody);

    }
    display(){
        var posBottom=this.bottomBody.position;

        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER);
        fill(280); 
        rect(0,0,200,20);
        pop();
    }
}
