let counterValue=0;

function updateCounter () {
   const counterElement = document.getElementById("counter");
   counterElement.textContent=counterValue;
}

function increment() {
    counterValue+=1;
    updateCounter();
}

function decrement() {
    counterValue-=1;
    updateCounter();
}

function reset() {
    counterValue=0;
    updateCounter();
}

updateCounter();
