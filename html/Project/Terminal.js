const terminalPopup = document.getElementById('terminal-popup');
const terminalHeader = document.querySelector('.terminal-header');

const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

let inputArray = [];
let indexOfInputArray = -1;

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

//dragging stuff
terminalHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - terminalPopup.offsetLeft;
    offsetY = e.clientY - terminalPopup.offsetTop;
    terminalHeader.style.cursor = 'grabbing'; 
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        terminalPopup.style.left = `${e.clientX - offsetX}px`;
        terminalPopup.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    terminalHeader.style.cursor = 'move'; 
});

//show things on terminal
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
            
            if (inputValue === 'clear') {
                terminalOutput.innerHTML = "";
            }

            terminalInput.value = '';
        }
    }
});

//keyboard control stuff (esc/arrows)
document.addEventListener('keydown', (event) => {
    if (terminalPopup.classList.contains('hidden')) return;

    switch (event.key) {
        case 'Escape':
            closeTerminal();
            break;
        case 'ArrowUp':
            if (indexOfInputArray < inputArray.length - 1) {
                indexOfInputArray++;
                terminalInput.value = inputArray[indexOfInputArray] || '';
            }
            break;
        case 'ArrowDown':
            if (indexOfInputArray > 0) {
                indexOfInputArray--;
                terminalInput.value = inputArray[indexOfInputArray] || '';
            } else {
                indexOfInputArray = -1; 
                terminalInput.value = '';
            }
            break;
    }
});