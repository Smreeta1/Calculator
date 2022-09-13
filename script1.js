const view = document.querySelector("#view");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      view.innerText = "";
    } else if (item.id == "backspace") {
      let string = view.innerText.toString();
      view.innerText = string.substr(0, string.length - 1);
    } else if (view.innerText != "" && item.id == "equal") {
      view.innerText = eval(view.innerText);
    } else if (view.innerText == "" && item.id == "equal") {
      view.innerText = "Empty!";
      setTimeout(() => (view.innerText = ""), 3000);
    } else {
      view.innerText += item.id;
    }
  };
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', myfunction);
  
function myfunction() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='grey';
        body.style.color =  ' 	#D2C3C3';
        body.style.transition = '0.2s';
    }else{
        body.style.background = ' 	#D2C3C3';
        body.style.color =  'grey';
        body.style.transition = '0.2s';
    }
  }