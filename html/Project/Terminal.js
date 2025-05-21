const terminalPopup = document.getElementById('terminal-popup');
const terminalHeader = document.querySelector('.terminal-header');

let terminalInput = document.getElementById('terminal-input');
let terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.querySelector('.terminal-body');

const canvas = document.getElementById('snake-canvas');


let isDragging = false;
let offsetX = 0;
let offsetY = 0;

let inputArray = [];
let indexOfInputArray = -1;

let snakeOn = false;

//show terminal on click
document.getElementById('terminal-button').addEventListener('click', () => {
    terminalPopup.classList.remove('hidden');
});

function closeTerminal() {
    terminalPopup.classList.add('hidden');
    terminalOutput.innerHTML = "";
    terminalInput.value = "";
    indexOfInputArray = -1;

}

function enforceTerminalBounds() {
    const terminalWidth = terminalPopup.offsetWidth;
    const terminalHeight = terminalPopup.offsetHeight;

    const parentWidth = window.innerWidth;
    const parentHeight = window.innerHeight;

    let left = terminalPopup.offsetLeft;
    let top = terminalPopup.offsetTop;

    let newLeft = Math.max(0, Math.min(parentWidth - terminalWidth, left));
    let newTop = Math.max(0, Math.min(parentHeight - terminalHeight, top));

    terminalPopup.style.left = `${newLeft}px`;
    terminalPopup.style.top = `${newTop}px`;
}


//dragging stuff
terminalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - terminalPopup.offsetLeft;
    offsetY = e.clientY - terminalPopup.offsetTop;
    terminalHeader.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        terminalPopup.style.left = `${newLeft}px`;
        terminalPopup.style.top = `${newTop}px`;

        enforceTerminalBounds();
    }
});


window.addEventListener('resize', enforceTerminalBounds);

document.addEventListener('mouseup', () => {
    isDragging = false;
    terminalHeader.style.cursor = 'move';
    enforceTerminalBounds()
});


//show things on terminal
function setupTerminalInputListener() {
    terminalInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const inputValue = terminalInput.value.trim();
            inputArray.unshift(inputValue);
            if (inputArray.length > 50) {
                inputArray.pop();
            }

            if (inputValue !== '') {
                const commandLine = document.createElement('div');
                const spanPrompt = document.createElement('span');
                const spanPromptEnd = document.createElement('span');
                const userInput = document.createElement('span');

                spanPrompt.classList.add("prompt");
                spanPromptEnd.classList.add("prompt-end");
                userInput.classList.add("prompt-end");

                spanPrompt.textContent = "user@portfolio:";
                spanPromptEnd.textContent = "~$"
                userInput.textContent = inputValue;

                commandLine.appendChild(spanPrompt);
                commandLine.appendChild(spanPromptEnd);
                commandLine.appendChild(userInput);

                terminalOutput.appendChild(commandLine);

                if (inputValue === 'whoami') {
                    const outputWhoAmI = document.createElement('div');
                    outputWhoAmI.textContent = `Hello, I am retarded!!!`;
                    terminalOutput.appendChild(outputWhoAmI);
                }

                if (inputValue === 'snake') {
                    snakeOn = true;
                    terminalOutput.innerHTML = ''

                    const instructions = document.createElement('div');
                    instructions.innerHTML = `
                        <pre>Use WSAD or arrow keys to move the snake.</pre>
                        <pre>Eat the apples, avoid walls and yourself!</pre>
                        <pre>Press 'R' to restart the game.</pre>
                        <pre>Press 'Q' to quit to terminal</pre>
                        <pre>Press 'S' when you're ready to start'</pre>`
                    terminalOutput.appendChild(instructions);
                }

                if (inputValue === 'clear') {
                    terminalOutput.innerHTML = "";
                }

                terminalInput.value = '';
            }
        }
    });
}


//keyboard control stuff (esc/arrows/snake game)
document.addEventListener('keydown', (event) => {
    if (terminalPopup.classList.contains('hidden')) return;

    switch (event.key) {
        case 'Escape':
            closeTerminal();
            break;
        case 'ArrowUp':
            if (!snakeOn) {
                if (indexOfInputArray < inputArray.length - 1) {
                    indexOfInputArray++;
                    terminalInput.value = inputArray[indexOfInputArray] || '';
                }
            }
            break;
        case 'ArrowDown':
            if (!snakeOn) {
                if (indexOfInputArray > 0) {
                    indexOfInputArray--;
                    terminalInput.value = inputArray[indexOfInputArray] || '';
                } else {
                    indexOfInputArray = -1;
                    terminalInput.value = '';
                }
            }
            break;
        case 's': //start snake
        case 'S': {
            if (snakeOn) {
                document.querySelector('.user-input-group').style.display = 'none';

                terminalBody.innerHTML = '';

                const canvas = document.createElement('canvas');
                canvas.id = 'snake-canvas';
                terminalBody.appendChild(canvas);

                canvas.style.display = 'block';

                startSnakeGame(canvas);
            }
            break;
        }
        case 'q': //end snake
        case 'Q': {
            if (snakeOn) {
                if (canvas.style.display !== 'none') {
                    canvas.style.display = 'none';
                }

                terminalBody.innerHTML = `
                        <pre>'ls Projects', 'whoami', 'snake?'</pre>
                        <div id="terminal-output"></div>
                        <div class="user-input-group">
                            <span class="prompt">user@portfolio:</span>
                            <span class="prompt-end">~$</span>
                            <label for="terminal-input" class="prompt"></label>
                            <input type="text" id="terminal-input" autocomplete="off" placeholder="...">
                        </div>`

                terminalInput = document.getElementById('terminal-input');
                terminalOutput = document.getElementById('terminal-output');

                document.querySelector('.user-input-group').style.display = '';

                setupTerminalInputListener();

                snakeOn = false;
            }
            break;
        }
    }
});

//snake terminal game
function startSnakeGame(canvas) {
    const canvasContext = canvas.getContext('2d');

    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const gridSize = 20;
    const tileCountX = Math.floor(canvas.width / gridSize);
    const tileCountY = Math.floor(canvas.height / gridSize);

    let snake = [{x: 5, y: 5}];
    let apple = {
        x: Math.floor(Math.random() * tileCountX),
        y: Math.floor(Math.random() * tileCountY),
    };
    let dx = 1;
    let dy = 0;
    let gameLoop;

    function draw() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

        // Apple
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);

        // Snake
        canvasContext.fillStyle = 'lime';
        snake.forEach(part => {
            canvasContext.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
        });
    }

    function moveSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};

        // Game over
        if (
            head.x < 0 || head.x >= tileCountX ||
            head.y < 0 || head.y >= tileCountY ||
            snake.some(p => p.x === head.x && p.y === head.y)
        ) {
            clearInterval(gameLoop);
            canvasContext.fillStyle = 'white';
            canvasContext.font = '20px monospace';
            canvasContext.fillText('Game Over! Press R to restart.', 30, canvas.height / 2);
            return;
        }

        snake.unshift(head);

        if (head.x === apple.x && head.y === apple.y) {
            apple = {
                x: Math.floor(Math.random() * tileCountX),
                y: Math.floor(Math.random() * tileCountY),
            };
        } else {
            snake.pop();
        }

        draw();
    }

    function startGame() {
        snake = [{x: 5, y: 5}];
        apple = {
            x: Math.floor(Math.random() * tileCountX),
            y: Math.floor(Math.random() * tileCountY),
        };
        dx = 1;
        dy = 0;
        clearInterval(gameLoop);
        draw();
        gameLoop = setInterval(moveSnake, 120);
    }

    document.addEventListener('keydown', function handleKey(e) {
        switch (e.key) {
            case 'W':
            case 'w':
            case 'ArrowUp':
                if (dy === 0) {
                    dx = 0;
                    dy = -1;
                }
                break;
            case 'S':
            case 's':
            case'ArrowDown':
                if (dy === 0) {
                    dx = 0;
                    dy = 1;
                }
                break;
            case 'A':
            case 'a':
            case 'ArrowLeft':
                if (dx === 0) {
                    dx = -1;
                    dy = 0;
                }
                break;
            case 'D':
            case 'd':
            case 'ArrowRight':
                if (dx === 0) {
                    dx = 1;
                    dy = 0;
                }
                break;
            case 'r':
            case 'R':
                startGame();
                break;
        }
    });

    startGame();
}

setupTerminalInputListener();