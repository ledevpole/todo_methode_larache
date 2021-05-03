window.onload = function(){

    const list = document.querySelector('#list-todo')  

    function addElement(){
        element = document.createElement('li')
        let value = document.getElementById('text-entry').value

        element.id = list.childElementCount
        element.innerHTML = `${value} <input  type="button" class="del-btn" name="${list.childElementCount}" value="delete"/>`

        element.querySelector(':first-child').addEventListener("click", (event) => {
            document.getElementById(event.target.name).remove()
        })
        list.appendChild(element)
    }

    document.getElementById('add-item').addEventListener("click", addElement)
}