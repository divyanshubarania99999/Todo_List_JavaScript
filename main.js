let input=document.querySelector("input")
let form=document.querySelector("form")
let ul=document.querySelector("ul")

function todolist(e){
    e.preventDefault()
    let inputtext=input.value
    let listgroup=document.createElement("li")
    listgroup.className = "list"
    listgroup.innerText=inputtext

    let delbtn=document.createElement("button")
    delbtn.className = "btn"
    delbtn.innerText = "Delete"
    listgroup.appendChild(delbtn)
    ul.appendChild(listgroup)
    form.reset()

    console.log(listgroup)
}

ul.addEventListener("click",deletetodo)
function deletetodo(e){
   if(e.target.className.includes("btn")){
        let deleteul = e.target.parentElement
        ul.removeChild(deleteul)
    }
    }

form.addEventListener("submit",todolist)