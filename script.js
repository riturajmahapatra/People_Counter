console.log('hello');

//-------------x-x--x---------Main Project------------x-x-x-----------x-x-x---------
// increment button functions

//initialize count to =0
//add clicks to inc. btn
//increment count variable when clicked
// change the count to new updated count



let name1 = prompt('Enter your Name')
let greeting1 = 'Welcome Back, 👋 '
let welcomeEl =  greeting1 +name1
document.getElementById('welcome-el').innerText = welcomeEl


/* 
can also write like this as well 
let welcomeEl = document.getElementById('welcome-el') 
let name = 'rituraj'
let greetings = 'Hi, Welcome back, '
welcomeEl.innerText = greetings + name
welcomeEl.innerText += 👋

 */



let countEl = document.getElementById('count-el')
let saveEL = document.getElementById('save-el')
// console.log(countEl);

let count = 0;
function increment(){
    
    count ++  /* or can write like count = count+1 or count += 1 */
    countEl.innerText = count /* helps increment */
    // console.log(count);
}

function decrement() {
    count=count-1
    countEl.innerText = count /* helps decrement */
    console.log(count);
}


function save(){
    let countStr = count + " , "
    saveEL.textContent += countStr  /* using textContent instead of innerText as it is more redable  */
    console.log('save btn clicked');
    countEl.innerText = 0  /* helps get to zero after hitting save */
    count=0
    console.log(count);
    
}

