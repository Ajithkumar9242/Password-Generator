console.log('Hello World!');

let form = document.querySelector('#idd')

let cpyBtn = document.querySelector('.cpy')

function passWord() {

let passwd = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#%$^&*()?~|₹=÷×+_+|`√¢¥¡[[]】【♂¶™π∆•°℃®<>"

let length = 16

let pass = ""
  
for(let i=0;i<length;i++){
  
let Random = Math.floor(Math.random()*passwd.length)

pass += passwd.substring(Random,Random+1)

}

form.value = pass

}


cpyBtn.addEventListener('click',cpyTxt)

function cpyTxt() {
  
  navigator.clipboard.writeText(form.value)
  
  alert('Copied')
}

