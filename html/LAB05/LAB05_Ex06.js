function nightTree(height) {
    let width = (height - 2) * 2 + 1;
    let pointerLeft = Math.floor(width / 2);
    let pointerRight = pointerLeft;

    console.log('*'.repeat(width));

    for (let i = 1; i <= height - 2; i++) {
        let row = '';
        for (let j = 0; j < width; j++) {
            if (j >= pointerLeft && j <= pointerRight) {
                row += ' ';
            } else {
                row += '*';
            }
        }
        console.log(row);
        pointerLeft--;
        pointerRight++;
    }

    console.log('*'.repeat(width));
}

nightTree(6);