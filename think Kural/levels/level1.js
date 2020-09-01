class level_1{
    constructor(){
    level1_btn = createButton('Level - 1');
    
    }
  hide(){
    level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();
   // this.greeting.hide();
     }
  display(){
  level1_btn.position(displayWidth/2 - 70, displayHeight/3)
    //this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    
  level1_btn.mousePressed(()=>{
    console.log("entered level 1");
    level1_btn.hide();
    level2_btn.hide();
    level3_btn.hide();

    v11  = createSprite(200,300);
    v11.addImage(v11i);
    v12  = createSprite(300,200);
    v12.addImage(v12i);
    v13  = createSprite(400,100);
    v13.addImage(v13i);
    v14  = createSprite(500,300);
    v14.addImage(v14i);
    v15  = createSprite(600,400);
    v15.addImage(v15i);
    v16   = createSprite(400,200);
    v16.addImage(v16i);
    v17  = createSprite(700,300);
    v17.addImage(v17i);
    drawSprites();
    //colour.addImage(bg2)
    //background()
    })
    }
    
    play(){
    
    }

}