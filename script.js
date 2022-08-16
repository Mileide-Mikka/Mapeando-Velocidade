let spaceShip = { //objeto
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registrationSpaceShip() {// função de registor da Nave
    spaceShip.shipName = prompt("Qual o nome da nave?");

    spaceShip.shipType = prompt("Qual o tipo da nave?");

    spaceShip.shipMaxVelocity = Number(prompt("Qual a velocidade maxima desta nave (Km/s?"));// interação com o usuario para saber a velocidade máxima da Nave
}

function acelerate() {// aumenta a velocidade da Nave, pergunta para o usuario o quanto ele quer acelerar
    let acceleration = Number(prompt("Quanto Devo acelerar?"));
    spaceShip.speedUp(acceleration);// faz a aceleração da nave acontecer
    if(spaceShip.velocity > spaceShip.shipMaxVelocity){
        // confere se a velocidade máxima da Nave foi ultrapassada
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                    "\nVelocidade da nave: " + spaceShip.velocity + "Km/s" +
                    "\nVelocidade máxima da Nave: " + spaceShip.shipMaxVelocity + "Km/s");
    }
}

function stopper(){
    //Essa função faz com que a nave pare
    alert("Nome: " + spaceShip.shipName + 
            "\nTipo: " + spaceShip.shipType + 
            "\nVelocidade da Nave: " + spaceShip.velocity + 
            "\nMáxima Velocidade da Nave: " + spaceShip.shipMaxVelocity);

    spaceShip.velocity = 0;
}

function showMenuOption(){
    // exibi o menu com as opções para o usuario escolher
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1 - Acelerar\n2 - Para");
        switch(chosenOption){
            case "1":
                acelerate()// chama a função quee acelera a Nave
                break;
            case "2":
                stopper()// chama a função que para a Nave
                break;
            default:
                alert("Opção inválida, por favor escolha uma opção válida");
        }
    } while (chosenOption != "2");
}

// Funções de inicialização
registrationSpaceShip()
showMenuOption()