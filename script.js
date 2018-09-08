
// function to create new note
function newNote() {
    console.log("new sticky created!");
    
    // ** CREATING STICKY NOTE ELEMENT COMPONENTS **
    
    // create list element to hold components
    var sticky = document.createElement('div');
    sticky.id = "sticky-container";
    
    // create bar to hold btns
    var bar = document.createElement('div')
    bar.id = "bar";
    
    // create save and delete btns
    var saveBtn = document.createElement('button');
    saveBtn.className = "saveBtn";
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    
    // create title div
    var title = document.createElement('textarea');
    title.id = "note-title";
    title.contentEditable = "true";
    title.placeholder = "Enter Title";
    title.maxLength = "28";
    
    // create content div
    var text = document.createElement('textarea');
    text.id = "note-content";
    text.placeholder = "Enter Content";
    text.contentEditable = "true";
    text.maxLength = "450";
    
    // append btns to bar
    bar.appendChild(saveBtn);
    bar.appendChild(deleteBtn);
    
    // append components to sticky
    sticky.appendChild(bar);
    sticky.appendChild(title);
    sticky.appendChild(text);
    
    // var board = document.getElementById('board');
    var board = document.getElementById('board');
    board.appendChild(sticky);

    
    
// ** ADD SAVE AND DELETE FEATURES **   
       
    // add click event button to DELETE sticky
    var clickDelete = document.querySelectorAll('.deleteBtn');
    for(let i=0; i<clickDelete.length; i++) {
        clickDelete[i].addEventListener('click', deleteNote, false);
    };
        
        
    // add click event button to SAVE sticky 
    var clickSave = document.querySelectorAll('.saveBtn');
    for(let i=0; i<clickSave.length; i++) {
        clickSave[i].addEventListener('click', saveNote, false); 
    };
    
};

// callback function for Delete
function deleteNote() {
    let board = document.querySelector('#board');
    let sticky = board.querySelectorAll('#sticky-container');

    for(let i=0; i<sticky.length; i++) {
        let selectedSticky = sticky[i];


        board.removeChild(selectedSticky);

        console.log("Note is deleted");
    };

    // localStorage.removeItem('note-title');
    // localStorage.removeItem('note-content');
    // console.log("deleting note contents...")

    // board.removeChild(sticky);
    // console.log("Note is deleted");
};


// callback function for Save
function saveNote() {

    // check if localstorage is supported
    if (typeof(Storage) !== "undefined") {
        console.log('localStorage is available!')
    } else {
        alert('Sorry! No Web Storage support.')
    };

    // check if both title and content is filled before saving
    if(localStorage.noteTitle !== "" && localStorage.noteContent !== "") {
        let title = document.getElementById('note-title');
        let content = document.getElementById('note-content');

        localStorage.noteTitle = title.value;
        localStorage.noteContent = content.value;
        console.log("Data saved!");
    }
    else {
        alert('Data not saved!')
    };
};