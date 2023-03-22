var sc=function scrollpage(){
    // var page=document.querySelector('page');
let total_ht=document.documentElement.scrollHeight;
let visiblepage=document.documentElement.clientHeight;
let scroll=document.documentElement.scrollTop;
let result=document.getElementById('output');



let remain=total_ht-visiblepage;

let cal=Math.round((scroll*100) / remain);
result.textContent= cal+ "%";
}


window.onscroll=sc;
// window.onload=sc;