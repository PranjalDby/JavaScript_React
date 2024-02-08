// NaN -representation

console.log(0 / 0)

document.body.onload = () => {
    const p_instance = document.createElement('p')
    const textNode = document.createTextNode("A newline character is written like \"\\n\"")
    p_instance.appendChild(textNode)

    const currentP = document.getElementById('paragraph')
    document.body.insertBefore(p_instance, currentP)

}
console.log('This is the first line\nAnd this is the second.')

// Logical Operators
