console.log('load time.mjs');
let time;
export function getTime() {
  if (!time) {
    throw new Error('no time set! use setTime to define a time source');
  }
  return time();
}

export function setTime(func) {
  console.log('setTime!');
  time = func;
}
