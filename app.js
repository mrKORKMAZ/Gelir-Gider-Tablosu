//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")


//? Variables
let gelirler= ""

//?Events
ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() //? Reload'u engeller
    gelirler += gelirInput.value
    console.log(gelirler)
})
//? Functions
