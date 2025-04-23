function setup() {
  createCanvas(400, 400);
}

//código escondido
  function draw() {
  triangle(200, 180, 170, 220, 220, 220);
  line(123,115,178,113);
  line(225,116,279,106);
  circle(150, 150, 10);
  circle(250, 150, 10);
    
       
    


  background('pink');
  fill ('yellow')
  circle(200,200,300); //rosto
  fill ('white')
  circle(150,150,60); //olho esquerdo
  fill ('white')
  circle(250,150,60);//olho direito
  line(150, 270, 250, 250);
  fill('brown');
  triangle(200, 180, 170, 220, 220, 220); //nariz
  circle(150,150,10); // pupila esquerda
  circle(250,150,10); // pupila direita
  fill('red')
  triangle(61, 49, 137, 63, 79, 108);//chapéu de natal
  fill('white')
  circle(61, 46, 30)
    if (mouseIsPressed){ 
  console.log(mouseX, mouseY);
  
  }
  }