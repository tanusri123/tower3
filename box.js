class Box  {
    constructor(x, y, width, height){
      super(x,y,width,height);
      Text("score:"+Score,750,40);
      block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
   push();
   strokeWeight(10);
   fill(204, 153, 0);
   ellipse(33, 50, 33, 33); 

   push(); 
   stroke(0, 102, 153);
   ellipse(66, 50, 33, 33); 
   pop(); 

   pop(); 

   ellipse(100, 50, 33, 33); 
    }}