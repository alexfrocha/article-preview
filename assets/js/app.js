let modal = document.querySelector('.article-share-modal');
let shareButton = document.querySelector('.article-share');



function verificarClique() {
    document.addEventListener('click', (e) => {
        if(e.target == shareButton) modal.classList.remove('none')
        if(e.target != shareButton) modal.classList.add('none')
    }) 
} 

verificarClique()