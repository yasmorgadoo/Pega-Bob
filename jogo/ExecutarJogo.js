function executarJogo(){
    background(fundo);
    jogador.mova();
    print(pontos);
    
    //faz os personagens voltarem
    for(let i = 0; i < personagem.length; i++){
      
      personagem[i].mova();
      //bater na borda
      if (personagem[i].posicaox > 600){
        personagem[i] = new Personagem();
      }
      //para na borda
     if(jogador.xInicial<personagem[i].yFinal && 
      jogador.xFinal>personagem[i].yInicial && 
      jogador.yInicial<personagem[i].xFinal && 
      jogador.yFinal>personagem[i].xInicial ){
         
        //aumentar pontos
        pontos++;

        if(personagem[i].img == imgPersonagem[3]){
          pontos = 0;
          //controleTela = ("MORTE");
          vida++;
        }  

        if(vida== 3){
          controleTela= "MORTE";
          pontos= 0;
          vida= 0;
          jogador= new Jogador();
        }

        //pontos
       personagem[i] = new Personagem();
       

      
     }
      //pontução
       text("Pontuação: " + pontos,250,20); 
       text("Bomba:" + vida,250,30);

    
    }
}