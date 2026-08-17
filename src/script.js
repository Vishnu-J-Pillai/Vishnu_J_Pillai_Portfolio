const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.right='20px';nav.style.flexDirection='column';nav.style.background='#111319';nav.style.padding='18px';nav.style.border='1px solid #303540';nav.style.borderRadius='10px'});
