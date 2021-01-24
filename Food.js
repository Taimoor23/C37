class Food {
    constructor(x,y,width,height){
        var options ={
            restitution:1
        }
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height= height;
        this.image = loadImage("Milk.png");
        this.FoodStock=0;
        this.LastFed=0;
        World.add(world,this.body);

    }

    display(){
        var x = 80, y= 100;
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 70);

        if(this.FoodStock !== 0){
            for(var i = 0; i<this.FoodStock; i++){
                if(1%10 === 0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
            }
        }  
    }

    getFoodStock(){
        var fedTime = database.ref('FeedTime');
        fedTime.on("value", function(data){
            lastFed=data.val();
        });
    }

    updateFoodStock(Food){
        database.ref('/').update({
            FoodStock:Food 
        })
    }

    deductFood(){

    }
}