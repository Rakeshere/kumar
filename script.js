const page=document.querySelector('.page');
function fit(){const w=document.documentElement.clientWidth;page.style.zoom=w/1024}
addEventListener('resize',fit);fit();
document.querySelectorAll('button[aria-label^="Save"]').forEach(b=>b.onclick=()=>b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true'));
