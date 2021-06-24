// "use strict";

console.log("MyNotes");

showNotes()

let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function(e){


    let addTitle = document.getElementById("noteTitle")
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")

    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let myObj = {
        noteTitle : addTitle.value,
        noteText : addTxt.value
    }
    notesObj.push(myObj)

    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTitle.value = ""
    addTxt.value = ""
    showNotes()
    console.log(notesObj, "New Note Added");
    
})

function showNotes(){
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ""
    notesObj.forEach(function(element, index){
        html += `  <div class="notesCard card alert-success mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.noteTitle}</h5>
                    <p class="card-text">${element.noteText}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-outline-danger">Delete Note</button>
                </div>
            </div>`
    })

    let notesElem = document.getElementById("notes")
    if(notesObj.length != 0){
        notesElem.innerHTML = html
    }
    else{
        notesElem.innerHTML = `<div class="alert alert-primary" role="alert">
                                You havn't added any notes.! Add Some Notes Here!
                                </div>`
    }

}

function deleteNotes(index){
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}

let searchTxt = document.getElementById("searchTxt")
searchTxt.addEventListener("input", function(){
    searchVal = searchTxt.value.toLowerCase()
    let notesCard = document.getElementsByClassName("notesCard")
    Array.from(notesCard).forEach(function(element){
        let notesVal = element.getElementsByTagName("p")[0].innerText
        if(notesVal.includes(searchVal)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
    })
    

})


























// let searchTxt = document.getElementById("searchTxt")
// searchTxt.addEventListener("input", function(){
//     let searchVal = searchTxt.value.toLowerCase()
//     let notesCard = document.getElementsByClassName("notesCard")
//     Array.from(notesCard).forEach(function(element){
//         let cardText = element.getElementsByTagName("p")[0].innerText 
//         if (cardText.includes(searchVal)){
//             element.style.display = "block"
//         }
//         else{
//             element.style.display = "none"
//         }
//     })
// })
