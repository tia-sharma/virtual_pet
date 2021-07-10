class Food{
    constructor(){
       var foodStock 
    
        this.image = loadImage("milk.png");
        World.add(world,this.body);
    }

    getFoodStock(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount=data.val();
        })

    }

    updateFoodStock(count){
        database.ref('/').update({
            UpdateFoodStock:count
        })
    }

    deductFood(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }

    display() {
      var x=80, y=100

      imageMode(CENTER);
      this.image(this.image,720,220,70,70);

      if(this.foodStock!=0) {
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80;
                  y=y+50
              }
              this.image(this.image,x,y,50,50);
              x=x+30;
          }
      }
    }
}