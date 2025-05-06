function addDiv() {
    let divsAmount = document.querySelectorAll('div').length;

    let div = document.createElement("div");
    let text = document.createTextNode(String(divsAmount + 1));
    div.appendChild(text);
    div.classList.add("p-4", "bg-gray-200", "rounded")
    document.getElementById("content_box").appendChild(div);
}

function deleteDiv() {
    let divs = document.querySelectorAll('div');
    divs[0].remove();
}

function changeBackground() {
    let divs = document.querySelectorAll('div');
    divs[2].style.backgroundColor = getRandomColorHex()
}

function addText() {
    let divs = document.querySelectorAll('div');
    divs.forEach( div => {
        div.textContent = "New Text";
    })
}


function getRandomColorHex() {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16); // 16777215 is the hex value for #FFFFFF
    return `#${randomHex.padStart(6, '0')}`;
}