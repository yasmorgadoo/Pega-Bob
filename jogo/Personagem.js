//conf personagens
class Personagem{
    constructor(){
      this.img = imgPersonagem[int(random(0,4))];
      this.posicaox = 10;
      this.posicaoy = random (10,590);
      this.velocidade = (random(1,5) + pontos);
      this.largura = 43;
      this.altura = 41;
      this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
    
    //para mover os personagens
    mova(){
      this.posicaox += this.velocidade;
      
      image(this.img, this.posicaoy, this.posicaox, this.largura, this.altura);
      this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.largura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.altura;
      
    }
  }
  