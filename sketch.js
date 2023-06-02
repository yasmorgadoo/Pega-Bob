var fundo
var jogador;
var personagem = [];
var imgPersonagem =[];
var pontos = 0;
var imgAbertura;
var controleTela = "INICIO";
var  imgGameOver;
var vida = 0;


  //inserir imagens
function preload() {
  fundo = loadImage ("jogo/imgJogo/fundo.jpg");
  imgPersonagem[0]= loadImage('jogo/imgJogo/aguaviva.png');
  imgPersonagem[1]= loadImage('jogo/imgJogo/gary.png');
  imgPersonagem[2]= loadImage('jogo/imgJogo/hamburguer.png');
  imgPersonagem[3]= loadImage('jogo/imgJogo/bomba.png');

  //aparecer os personagem
  personagem[0] = new Personagem();
  personagem[1] = new Personagem();
  personagem[2] = new Personagem();
  
  jogador = new Jogador;
  imgAbertura = loadImage("jogo/imgJogo/abertura.png");
  imgGameOver = loadImage("jogo/imgJogo/gameover.png");
}

  // tamanho
function setup() {
  createCanvas(600, 400).parent("jogo");
}

  //carregamento do jogo
function keyPressed(){
  if(keyCode==32){
    controleTela = "jogo";
  }
}

function draw(){
  if (controleTela == "INICIO"){
    mostrarAbertura();
  }
  else{
    executarJogo();
  } if (controleTela == "MORTE"){
    mostrarFinal();
  }
    }



