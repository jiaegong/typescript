/**
 * Let's make a game 🕹
 */
 const position = { x: 0, y: 0};

 function move(direction: 'up' | 'down' | 'left' | 'right') {
     switch (direction) {
        case 'up':
            position.y += 1;
            break; // break를 해주지 않으면 밑에 있는 case까지 실행되므로 해줘야 함
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error(`unknown direction: ${direction}`);
     }
 }

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
