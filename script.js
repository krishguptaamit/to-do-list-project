function addtask(){
    const newTask = document.createElement('li')
    const tasklist2 = document.getElementById('tasklist')
    tasklist2.appendChild(newTask)
    newTask.textContent = document.getElementById('inputtask').value
    document.getElementById('inputtask').value = ""
    deletetask(newTask)
}

function deletetask(newTask){
    const deletebtn = document.createElement('button')
    deletebtn.textContent= 'Delete'
    newTask.appendChild(deletebtn)
    deletebtn.onclick = function(){
        newTask.remove()
    }
}