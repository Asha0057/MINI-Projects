let contain=document.querySelector('.container');
let btns=document.querySelectorAll('.btn');
const images=["1s","2s","3s","4s","5s","6s"];

let index=0;
btns.forEach((buttons)=>{
    buttons.addEventListener('click',()=>
    {
        if(buttons.classList.contains('btn-left'))
        {
            index--;
            if(index<0)
            {
                index=images.length-1;
            }
            contain.style.background=`url('images/${images[index]}.jpg') center/cover no-repeat`;
        }
        else
        {
            index++;
            if(index>images.length-1)
            {
                index=0;
            }
            contain.style.background=`url('images/${images[index]}.jpg')  center/cover no-repeat`;
        }

    });
});