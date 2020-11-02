const btn = document.querySelector(".burger-menu");
const list =document.querySelector(".burger-ul");
var a=0;


btn.addEventListener("click",() =>
{
    if(a==0)
    {
        list.setAttribute("style","display:inline;");
        a=1;
    }
    else{
        list.setAttribute("style","display:none;")
        a=0;
    }
});




