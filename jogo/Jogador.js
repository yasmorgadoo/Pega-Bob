//conf do jogador
class Jogador{
    constructor(){
      this.imagem = loadImage("jogo/imgJogo/bobesponja.png");
      this.posX = 250;
      this.posY = 235;
      this.velocidade =  5;
      this.largura = 130;
      this.altura = 160;
      
      this.yInicial = this.posY;
      this.yFinal = this.posX + this.altura
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura
    }
    //para o jogador se mover
    mova(){
    image(this.imagem,this.posX,this.posY,this.largura,this.altura); 
      
     
      //esquerda
      if((keyIsDown(37))&&(this.xInicial>0)){
        this.posX -= this.velocidade;
      }
      //direita
      if ((keyIsDown(39))&&(this.xFinal<600)){
        this.posX += this.velocidade;
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura
      
    }
  }