console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(Array.from(document.body.childNodes))

console.log(document.body.firstChild)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.parentElement)
console.log(document.body.firstElementChild.parentNode)

let b = document.body
console.log("first child" , b.firstChild)
console.log("first element child" , b.firstElementChild)

const BodyBG = () => {
    document.body.firstElementChild.style.background = "red"
}

let t = document.body.firstElementChild.firstElementChild
console.log(t.rows)