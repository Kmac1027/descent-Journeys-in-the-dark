import { map1 } from '../data/dungeonMaps/map1'

export const heroToken = {
  w: 50,
  h: 50,
  x: map1.start_area.x,
  y: map1.start_area.y,
  speed: 5,
  dx: 0,
  dy: 0
}


export const disableMovment = {
  right: false,
  left: false,
  up: false,
  down: false
}
export function keyDown(event) {
  event.preventDefault();
  if ((event.key === 'ArrowRight' && disableMovment.right === false) || (event.key === 'Right' && disableMovment.right === false)) {
    moveRight();
  } else if ((event.key === 'ArrowLeft' && disableMovment.left === false) || (event.key === 'Left' && disableMovment.left === false)) {
    moveLeft();
  } else if ((event.key === 'ArrowUp' && disableMovment.up === false) || (event.key === 'Up' && disableMovment.up === false)) {
    moveUp();
  } else if ((event.key === 'ArrowDown' && disableMovment.down === false) || (event.key === 'Down' && disableMovment.down === false)) {
    moveDown();
  }
}

export function keyUp(event) {
  event.preventDefault();
  if (
    event.key === 'ArrowRight' ||
    event.key === 'Right' ||
    event.key === 'ArrowLeft' ||
    event.key === 'Left' ||
    event.key === 'ArrowUp' ||
    event.key === 'Up' ||
    event.key === 'ArrowDown' ||
    event.key === 'Down'
  ) {
    heroToken.dx = 0;
    heroToken.dy = 0;
  }
}



export function moveUp() {
  // heroToken.dy = -heroToken.speed
  heroToken.y -= 50;
  previousPosition.y = heroToken.y + 50;
  previousPosition.x = heroToken.x;
  disableMovment.right = false;
  disableMovment.left = false;
  disableMovment.up = false;
  disableMovment.down = false;

}
export function moveDown() {
  // heroToken.dy = heroToken.speed
  heroToken.y += 50;
  previousPosition.y = heroToken.y - 50;
  previousPosition.x = heroToken.x;
  disableMovment.right = false;
  disableMovment.left = false;
  disableMovment.up = false;
  disableMovment.down = false;
}
export function moveLeft() {
  // heroToken.dx = -heroToken.speed
  heroToken.x -= 50
  previousPosition.x = heroToken.x + 50;
  previousPosition.y = heroToken.y;
  disableMovment.right = false;
  disableMovment.left = false;
  disableMovment.up = false;
  disableMovment.down = false;
}
export function moveRight() {
  // heroToken.dx = heroToken.speed
  heroToken.x += 50;
  previousPosition.x = heroToken.x - 50;
  previousPosition.y = heroToken.y;
  disableMovment.right = false;
  disableMovment.left = false;
  disableMovment.up = false;
  disableMovment.down = false;
}

export let previousPosition = {
  x: 0,
  y: 0
}

export function detectWalls(canvas) {
  //left wall
  if (heroToken.x < 0) {
    heroToken.x = 0;
  }
  //right wall
  if (heroToken.x + heroToken.w > canvas.width) {
    heroToken.x = canvas.width - heroToken.w;
  }
  //top wall
  if (heroToken.y < 0) {
    heroToken.y = 0;
  }
  //bottom wall
  if (heroToken.y + heroToken.h > canvas.height) {
    heroToken.y = canvas.height - heroToken.h;
  }
}

