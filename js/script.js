  function drawText() {
  
    let canvas = document.getElementById("ltpcanvas");
    let context = canvas.getContext("2d");
    context.font = 'bold 68px Poiret One';


    let word = window.prompt("Escribe la palabra, krnal");

    //user color definition
    // let colorContorno = window.prompt("Qué color quieres el contorno");
    // colorContorno = colorContorno.toLowerCase;
    // let colorRelleno = window.prompt("Y el relleno?");
    // colorRelleno = colorRelleno.toLowerCase;

    let screenWidth = Math.floor(window.innerWidth);
    let screenHeight = Math.floor(window.innerHeight);
    let canvasWidth = Math.floor(screenWidth*0.8);
    let canvasHeight = Math.floor(screenHeight*0.8);
    let sideSpace = Math.floor((screenWidth-canvasWidth)/2);
    let upNdownSpace = Math.floor((screenHeight-canvasHeight)/2);
    let wordWidth = Math.floor(context.measureText(word).width);
    let wordWidthRound = Math.floor(wordWidth);
    let initX = sideSpace;
    let endX = (screenWidth-sideSpace); 
    let initY = upNdownSpace;
    let endY = (screenHeight-upNdownSpace);

    //horizontal control
    let wordCount = Math.floor(canvasWidth/wordWidthRound);
    let wordCountTotal = wordCount*wordWidthRound;
    let canvasBlankSpace = canvasWidth-wordCountTotal;
    let totalBlankSpaces = wordCount-1;
    let individualBlankWidth = canvasBlankSpace/totalBlankSpaces;
    let xStep = wordWidthRound+individualBlankWidth;

    //vertical control
    let verticalCount = Math.floor(canvasHeight/30);

    //validating in console
    console.log(screenWidth + " de ancho & de alto (pantalla) " + screenHeight);
    console.log(canvasWidth + " de ancho & de alto (canvas) " + canvasHeight);
    console.log("El espacio que sobra a cada lado es: " + sideSpace);
    console.log("El espacio que sobra arriba y abajo es: " + upNdownSpace);
    console.log("el init en X tendría sentido que fuera en: " + initX + " y el end en: " + endX);
    console.log("el init en Y tendría sentido que fuera en: " + initY + " y el end en: " + endY);
    console.log("Ancho de la palabra: "+ wordWidthRound +"px");
    console.log("El espacio total ocupado por las palabras es: " + wordCountTotal);
    console.log("El espacio total libre en el canvas es: " + canvasBlankSpace);
    console.log("el ancho de cada espacio es: " + individualBlankWidth);
    console.log("verticalmente caben: " + verticalCount);
    
    if(wordCount>=3){
      for(let i=0; i<wordCount; i++){
        initY = upNdownSpace;

        for(let j=0; j<verticalCount;j++) {
          context.lineWidth = 2;
          context.strokeStyle = "black";
          context.strokeText(word,initX,initY);
          context.fillStyle = "red";    
          context.fillText(word,initX,initY);
          initY+=34;  
        }

        initX+=xStep;
      }
    }

    else if(wordCount===2) {
      totalBlankSpaces = 3;
      individualBlankWidth = canvasBlankSpace/totalBlankSpaces;
      initX = sideSpace+individualBlankWidth;
      xStep = wordWidthRound+individualBlankWidth;

      for(let i=0; i<wordCount; i++){
        initY = upNdownSpace;

        for(let j=0; j<verticalCount;j++) {
          context.lineWidth = 2;
          context.strokeStyle = "black";
          context.strokeText(word,initX,initY);
          context.fillStyle = "red";    
          context.fillText(word,initX,initY);
          initY+=34;  
        }

        initX+=xStep;
      }

    }
    

      

        // for(let i=0; i<wordCount; i++){
        //   initY = upNdownSpace;

        //   for(let j=0; j<verticalCount;j++) {
        //     context.lineWidth = 2;
        //     context.strokeStyle = "black";
        //     context.strokeText(word,initX,initY);
        //     context.fillStyle = "red";    
        //     context.fillText(word,initX,initY);
        //     initY+=34;  
        //   }

        //   initX+=xStep;
        // }
                
  }
  
  drawText();

  function print() {
    for(let i=0; i<wordCount; i++){
      initY = upNdownSpace;

      for(let j=0; j<verticalCount;j++) {
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.strokeText(word,initX,initY);
        context.fillStyle = "red";    
        context.fillText(word,initX,initY);
        initY+=34;  
      }

      initX+=xStep;
    }
  }