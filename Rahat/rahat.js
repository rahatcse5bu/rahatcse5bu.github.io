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
const left_skill_list=document.querySelector('.resume .resume-skill-1 .col-left .left-skill-list');
const right_skill_list=document.querySelector('.resume .resume-skill-1 .col-right .right-skill-list');
const left_skill_header=document.querySelector('.resume .resume-skill-1 .col-left .left-skill-header');

right_skill_header=document.querySelector('.resume .resume-skill-1 .col-right .right-skill-header');
left_icon=document.querySelector('.resume .resume-skill-1 .col-left .left-skill-header .fas');
right_icon=document.querySelector('.resume .resume-skill-1 .col-right .right-skill-header .fas');

left_skill_header.addEventListener('click',function(){
    
    if(left_skill_list.style.maxHeight){
        left_skill_list.style.maxHeight=null;
        left_icon.style.transform="rotateX(360deg)";
    }
    else {
        left_skill_list.style.maxHeight=left_skill_list.scrollHeight + "px";
        left_icon.style.transform="rotateX(180deg)";
       
    }
});


right_skill_header.addEventListener('click',function(){
    if(right_skill_list.style.maxHeight){
        right_skill_list.style.maxHeight=null;
        right_icon.style.transform="rotateX(360deg)";
    }
    else {
        right_skill_list.style.maxHeight=right_skill_list.scrollHeight + "px";
        right_icon.style.transform="rotateX(180deg)";
    }
});