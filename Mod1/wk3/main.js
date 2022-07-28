const btn = document.querySelector('button')
btn.addEventListener('click', function(evt){
    //testing!!
    //console.log(evt)
    const li = document.createElement('li')
    console.log(li)
    const inp = document.querySelector('input')
    li.textContent = inp.value
    document.querySelector('ul').appendChild(li)
    inp.value = ''
})

document.querySelector('ul').addEventListener('click',handleClick)
function handleClick(evt){
    console.log(evt)
    evt.target.style.color = "brown"
}
ul.removeEventListener('click', handleClick)