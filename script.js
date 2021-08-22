const textLoading = document.querySelector('.text-loading');

const bg = document.querySelector('.bg');

let load = 1;

let a = setInterval(loading, 30);

function loading() {
  load++;

  if (load == 100) {
    clearInterval(a);
  }
  textLoading.innerText = `${load}%`;
  textLoading.style.opacity = scale(load, 30, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
