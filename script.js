let humanScore = 0;
let computerScore = 0;



    function getChoicesfComputer() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }


    function playRounds(humanChoice, computerChoice) {
        const vitoria = 'Voce ganhou!!'
        if (humanChoice === computerChoice) {
            return ('Isso foi um empate');
            } else if (humanChoice === 'rock' && computerChoice ==='scissors') {
                humanScore ++
                return (vitoria)
            } else if (humanChoice === 'scissors' && computerChoice ==='paper') {
                humanScore ++
                return (vitoria)
            } else if (humanChoice === 'paper' && computerChoice ==='rock') {
                humanScore ++
                return (vitoria) 
            }
                else {
                    computerScore++
                    return ('O computador ganhou')
                } 
    }

    function handleHumanChoice () {
        const rockSelected = document.getElementById('rock-selection');
        const paperSelected = document.getElementById('paper-selection');
        const scissorsSelected = document.getElementById('scissors-selection');

        const placar = document.getElementById('display-value');    

        if (!rockSelected || !paperSelected || !scissorsSelected) {
            console.warn('Buttons not found. Check the ids inside html: rock-selection, paper-selection, scissors-selection');
            return;
        }

        rockSelected.addEventListener("click", () => {
            const computerChoice = getChoicesfComputer();
            const resultadoGame = playRounds('rock', computerChoice);
            console.log(`Humano: rock | Computador: ${computerChoice} -> ${resultadoGame}`);
            console.log(`Placar: Humano ${humanScore} x ${computerScore} Computador`);
            placar.textContent = `Humano ${humanScore} x ${computerScore} Computador `
        });

        paperSelected.addEventListener("click", () => {
            const computerChoice = getChoicesfComputer();
            const resultadoGame = playRounds('paper', computerChoice);
            console.log(`Humano: paper | Computador: ${computerChoice} -> ${resultadoGame}`);
            console.log(`Placar: Humano ${humanScore} x ${computerScore} Computador`);
            placar.textContent = `Humano ${humanScore} x ${computerScore} Computador `
        });

        scissorsSelected.addEventListener("click", () => {
            const computerChoice = getChoicesfComputer();
            const resultadoGame = playRounds('scissors', computerChoice);
            console.log(`Humano: scissors | Computador: ${computerChoice} -> ${resultadoGame}`);
            console.log(`Placar: Humano ${humanScore} x ${computerScore} Computador`);
            placar.textContent = `Humano ${humanScore} x ${computerScore} Computador `
        });

    }

    // function jogarPartidas() {
    //         let escolhaComputador = getChoicesfComputer()
    //         let resultadoGame = playRounds(escolhaHumano, escolhaComputador);
    //         console.log(`Rodada ${start + 1}: Humano = ${escolhaHumano}, Computador = ${escolhaComputador} → ${resultadoGame} (Placar: Humano ${humanScore} x ${computerScore} Computador)`);
    //         console.log(resultadoGame);
    //         start++
        
    //     resultadoJogo();
    // }

    function resultadoJogo() {
         if (humanScore === computerScore) {
            console.log('Isso foi um empate');
        }    else if (humanScore > computerScore) {
            console.log('O humano ganhou')
        } else {
            console.log('O computador ganhou')
        }
        console.log(`Placar final: Humano ${humanScore} x ${computerScore} Computador`);
    }

    // function getHumanChoice() {
    //     const choicesForHuman = ['rock', 'paper', 'scissors'];

    //     while (true) {
    //         const humanAnswer = parseInt(prompt('Enter the number you wanna choose as your play hand, 0 = rock, 1 = paper or 2 = scissors'));

    //         if (humanAnswer === 0) {
    //             return choicesForHuman[0];
    //         } else if (humanAnswer === 1) {
    //             return choicesForHuman[1];
    //         } else if (humanAnswer === 2) {
    //             return choicesForHuman[2];
    //         } else {
    //             alert('Insira uma opcao valida');
    //         }
    //     }
    // }


handleHumanChoice();