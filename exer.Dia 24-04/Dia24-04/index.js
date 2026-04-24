// Pego o elemento H# por TAG
const titulo = document.querySelector('h3')
// Pego o elemento button POR TAG 
const btn = document.querySelector('button')

// Adiciono um evento ao botão
btn.addEventListener('click',() => {
    // Quando clicarmos no botão, a função 
    // vai adicionar uma classe ao titulo 
    titulo.classList.toggle('green')
})