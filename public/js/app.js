fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Js'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchEl.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    let url = '/weather?address='+location

    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
            console.log(data.error)
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

    console.log(location)
})