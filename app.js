const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener('click',function onClick(){
		btn1.innerHTML = "Activated";
    btn1.style.backgroundColor = "green";
});

btn2.addEventListener('click',function onClick2(){
		btn2.style.backgroundColor = "orange";
    btn2.innerHTML ="Go to Payment";
    setTimeout(()=>{
    		btn2.innerHTML = "Payment Successful";
        btn2.style.backgroundColor = "green";
        setTimeout(()=>{
        		btn2.innerHTML = "Activated Plus";
        },3000);
    },2000);
});

btn3.addEventListener('click',function onClick3(){
		btn3.style.backgroundColor = "orange";
    btn3.innerHTML ="Go to Payment";
    setTimeout(()=>{
    		btn3.innerHTML = "Payment Successful";
        btn3.style.backgroundColor = "green";
        setTimeout(()=>{
        		btn3.innerHTML = "Activated Pro";
        },3000);
    },2000);
});
