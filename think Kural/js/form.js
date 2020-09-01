class Form {

    constructor() {
      this.name = createInput("Name");
      this.play = createButton("play");
      this.greeting = createElement('h1');
      this.title = createElement('h2');
      this.greeting2= createElement('h1')
    // world.add(this.greeting)
    }
    hide(){
      this.greeting.hide();
      this.play.hide();
      this.name.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("THINK KURAL");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.play.position(displayWidth/2 + 30, displayHeight/2);
      //this.play.addClass(avatar1I);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.greeting2.position(displayWidth/2 - 70, displayHeight/2);
      fill("green")
      //this.greeting.html("Choose Your LEVEL")
      //this.greeting2.html("ALL THE BEST !!!")
      this.play.mousePressed(()=>{
        this.name.hide();
        this.play.hide();
        //player.name = this.input.value();
        //playerCount+=1;
        //player.index = playerCount;
        //player.update();
       // player.updateCount(playerCount);
       // this.greeting.html("Hello " + this.name.value() + ", Choose Your Avatar");
       //this.greeting2.html("ALL THE BEST !!!")
     
    level1 = new level_1();
    level1.display();
    level2 = new level_2();
    level2.display();
    level3 = new level_3();
    level3.display();
    
    
      });
  
    }
  }
