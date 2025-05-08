const terminalPopup = document.getElementById('terminal-popup');
const terminalHeader = document.querySelector('.terminal-header');

const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

//show terminal on click
document.querySelector('nav button:nth-child(2)').addEventListener('click', () => {
    terminalPopup.classList.remove('hidden');
});

function closeTerminal() {
    terminalPopup.classList.add('hidden');
    terminalOutput.innerHTML = "";
    terminalInput.value = "";
    
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