const txtprecioInicial = document.querySelector ('.precio-inicial')
const txtcantidad = document.querySelector ('.cantidad')
const txtvalorTotal = document.querySelector ('.valor-total')
let valorTotal = 0
let cantidad = 0
const precioInicial = 400000

const mas = document.querySelector ('#mas')
const menos = document.querySelector ('#menos')

mas.addEventListener ("click", () => {
    cantidad++
    txtcantidad.innerHTML = cantidad
    valorTotal = (cantidad * precioInicial)
    txtvalorTotal.innerHTML = valorTotal
})

menos.addEventListener ("click", () => {
    cantidad--
    txtcantidad.innerHTML = cantidad
    valorTotal = (cantidad * precioInicial)
    txtvalorTotal.innerHTML = valorTotal
})