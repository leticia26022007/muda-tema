function muda tema (tema) {
    if (tema==='escuro') {
        document.body.classList.remove('escuro');
        document.body.classList.add('claro');
    }
}
else{
   document.body.classList.remove('claro');
   document.body.classList.add('escuro');
}