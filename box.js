class Box{
    constructor(x,y,widht,height){
     var options={
         restitution=1.0
     }

        this.body= Body.rectangle(x,y,width,height,options)
        this.height=height;
        this.width=width;
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var a= this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (a)
        rectMode=(CENTER)
        rect(0,0,this.width,this.height)
        pop ()
    }
}