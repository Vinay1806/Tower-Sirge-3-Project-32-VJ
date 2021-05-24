class Purplebox extends Box
{
    constructor(x,y)
    {
        super(x,y,30,30);
    }

    display()
    {
        if(this.body.speed < 3)
        {
            fill("violet");
            super.display();
        }

        else
        {
            World.remove(world , this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            rect(this.x,this.y,24,24);
            pop();
        }
        
    }
}