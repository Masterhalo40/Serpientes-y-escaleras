
var btnPlayer1 = document.querySelector("#btnPlayer1").addEventListener("click", ()=>{
        player1.lanzarDado('Player1');
        if(player1.suma >= 100){
            alert('El Player 1 ha sido el ganador');
            location.reload();
        }
    });

var btnPlayer2 = document.querySelector("#btnPlayer2").addEventListener("click", ()=>{   
        player2.lanzarDado('Player2');
        if(player2.suma >= 100){
            alert('El Player 2 ha sido el ganador');
            location.reload();
        }     
    });
    
    class Dado{  
        
        constructor(){
            this._suma = 0;
        }
        get suma(){
            return this._suma;
        }
        
        lanzarDado(Player){
        var mover = Math.trunc(Math.random()*6)+1;

        console.log('El dado cayó en: ' + mover);
    
        this._suma += mover;
        console.log('El ' + Player + ' ahora esta en la casilla : '  + this._suma);
  
        if(this._suma == 4){
            this._suma = 19;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 15){
            this._suma = 28;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 22){
            this._suma = 37;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 33){
            this._suma = 46;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 49){
            this._suma = 75;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }
        else if(this._suma == 40){
            this._suma = 79;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 66){
            this._suma = 85;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }else if(this._suma == 81){
            this._suma = 96;
            console.log('LLegaste a una escalera, subes hasta la casilla ' + this._suma);
        }

        if(this._suma == 21){
            this._suma = 13;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 41){
            this._suma = 2;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 52){
            this._suma = 44;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 59){
            this._suma = 18;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 68){
            this._suma = 34;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 77){
            this._suma = 47;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 85){
            this._suma = 50;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }else if(this._suma == 97){
            this._suma = 60;
            console.log('LLegaste a una serpiente, bajas hasta la casilla ' + this._suma);
        }   
        }
    }
var player1 = new Dado();
var player2 = new Dado();