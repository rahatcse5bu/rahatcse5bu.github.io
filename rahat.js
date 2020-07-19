const hamburger=document.querySelector('.hamburger');
const open_btn=document.querySelector('.hamburger .fa-bars');
const close_btn=document.querySelector('.hamburger .fa-times');
const sidebar=document.querySelector('#sidebar .sidebar');
const sidebar_item=document.querySelectorAll('#sidebar .sidebar  .sidebar-item');

open_btn.addEventListener('click',()=>{
 close_btn.style.display="block";
    open_btn.style.display="none";
    sidebar.style.marginLeft="0px";
    sidebar.style.zIndex="89";
    sidebar.style.position="absolute";
//    sidebar.style.top="50px";
    sidebar.style.left="0px";
//    sidebar.style.width="100%";
    close_btn.style.zIndex="78";
//    sidebar.style.zIndex="43";
//    sidebar_item.style.width="80%";
//    sidebar_item.style.margin="auto";
    sidebar.style.transition="opacity 1.5s";
    sidebar.style.transitionDelay=".1s";
    sidebar.style.opacity="1";
});

close_btn.addEventListener('click',()=>{
 close_btn.style.display="none";
    open_btn.style.display="block";
    sidebar.style.marginLeft="-600px";
//    alert('Closed');
//    sideabr.style.zIndex="23";
    sidebar.style.opacity="0";
});

//if(window.matchMedia("(min-width: 799px)")){
////alert('Great');
//}
//else if (window.matchMedia("(max-width: 799px)")){
////    alert('hih');
//    for (var i = 0 ; i < sidebar_item.length; i++) {
//sidebar_item[i].addEventListener('click',()=>{
// close_btn.style.display="none";
//    open_btn.style.display="block";
//    sidebar.style.marginLeft="-600px";
////    alert('Closed');
////    sideabr.style.zIndex="23";
//    sidebar.style.opacity="0";
//});
//}
//}