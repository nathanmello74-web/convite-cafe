//função redirecionamento quando sim for acionado 
function aceitou(){
    const linkYoutube ="https://www.youtube.com/watch?v=s27s6BNXxYY";
    window.location.href = linkYoutube;
}

// faz o botao não fugir
function foge(){
    // pega referencia botao html usando ID
    const btnNao = document.getElementById('btn-nao');

    /*saber a largura da tela para os botoes nao se colarem*/
    const larguraMax = window.innerWidth - 100;
    const alturaMax = window.innerHeight - 50;

    /*Math.random() gera um número decimal aleatório entre 0 e 1 (ex: 0.543).
       Multiplicamos pelo tamanho máximo da tela para saber a nova coordenada.
       Math.floor() arredonda esse número para baixo, deixando-o inteiro (ex: 450px).*/
    const xAleatorio = Math.floor(Math.random() * larguraMax);
    const yAleatorio = Math.floor(Math.random() * alturaMax);

    //Como no CSS usamos position absolute/fixed, mudamos a posição por aqui
    btnNao.style.position = 'fixed';
    btnNao.style.left = xAleatorio + 'px';
    btnNao.style.top = yAleatorio + 'px';
}