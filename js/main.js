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

        setTimeout(alert,10000,element.id)
    }

    function alert(id){
        console.log("ici")
        document.getElementById(id).classList.add("late");
        setTimeout(alert2,5000,id)
    }

    function alert2(id){
        console.log("alert2")
        document.getElementById(id).classList.add("green");
        setTimeout(alert3,5000,id)
    }

    function alert3(id){
        console.log("alert3")
        document.getElementById(id).classList.add("blue");
    }

    document.getElementById('add-item').addEventListener("click", addElement)
}