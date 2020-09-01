class Avatar{
    constructor(){
    this.avatar1_btn = createButton('AVATAR 1');
this.greeting = createElement('h1')
    }
hide(){
    this.avatar1_btn.hide();
   // this.greeting.hide();
}
    
    avatar10(){
    this.avatar1_btn.position(displayWidth/2 - 70, displayHeight/3)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4)
    //this.avatar1 = loadImage("images/avatar1.png");
    this.avatar1_btn.mousePressed(()=>{
    this.avatar1_btn.hide();
    this.greeting.html("choose your level")
    level1 = new level_1();
    level1.display();
    level2 = new level_2();
    level2.display();
    level3 = new level_3();
    level3.display();
    background(thiruvaluvarimg);
    })
    }


}