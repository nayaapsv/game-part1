class level_3{
    constructor(){
    level3_btn = createButton('Level - 3')
    }
  hide(){
    level3_btn.hide();
    level2_btn.hide();
    level1_btn.hide();
   // this.greeting.hide();
     }
    
    display(){
    level3_btn.position(displayWidth/2 - 70, displayHeight/2)
    //this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    
    level3_btn.mousePressed(()=>{
   
    level3_btn.hide();
    level2_btn.hide();
    level1_btn.hide();
    
    })
    }


}