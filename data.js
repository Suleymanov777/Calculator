let a = ""; 
let b = "";
let sign = "";
let finish = false;

const digit =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '. ']
const action = ['+', '-',  'x', '/']

const out = document.querySelector('.Calculator__p ')

function clearAll () {
   a = ''; 
   b = '';
   sign = '';
   finish = false;
   out.textContent = 0;
}   

document.querySelector('.ce').onclick = clearAll;
document.querySelector('.wraper__box').onclick = (event) => {

    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('ce')) return;
    //////
    out.textContent = '';
    const key = event.target.textContent;

    // 0-9
    if (digit.includes(key)){    
    if (b === '' && sign === ''){
     a += key;
    
    out.textContent = a;
    }
    else if (a!== '' && b!=='' && finish) {
        b = key;
        finish = false;
        out.textContent = a;
    }
     else {
            b += key;
            out.textContent = b;
     }console.table(a, b, sign);
     return;
   
  }

    /////
     if (action.includes(key)){    
    sign = key
    out.textContent = sign;
    console.table(a, b, sign);
    return;
    }

    if (key === '='){
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
                case "-":
                a = a - b;
                break;
                case "x":
               a = a * b;
                break;
                case "/":
               a = a / b;
                
        }
        finish = true
        out.textContent = a;
        console.table(a, b, sign);
    }
}

