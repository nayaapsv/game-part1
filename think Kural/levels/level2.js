class level_2{
    constructor(){
    level2_btn = createButton('Level - 2')
    }
  hide(){
     level2_btn.hide();
     level3_btn.hide();
    level1_btn.hide();
   // this.greeting.hide();
     }
    
    display(){
    level2_btn.position(displayWidth/2 - 70, displayHeight/2.5)
    //this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    
    level2_btn.mousePressed(()=>{
    
    level2_btn.hide();
    level1_btn.hide();
    level3_btn.hide();

    v21  = createSprite(200,300);
    v21.addImage(v21i);
    v22  = createSprite(300,200);
    v22.addImage(v22i);
    v23  = createSprite(400,100);
    v23.addImage(v23i);
    v24  = createSprite(500,300);
    v24.addImage(v24i);
    v25  = createSprite(600,400);
    v25.addImage(v25i);
    v26   = createSprite(100,200);
    v26.addImage(v26i);
    v27  = createSprite(700,300);
    v27.addImage(v27i);
    drawSprites();
    
    })
    }


}