const listaDeLink = document.querySelectorAll('.menu__link');

for(let i = 0; i < listaDeLink.length; i++) {
    const link = listaDeLink[i];
    const ativa = link.classList;

    link.addEventListener('click', () => {
        ativa.toggle('menu__link--ativo')
    })
}


