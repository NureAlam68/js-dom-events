function makeRed() {
    document.body.style.backgroundColor = "red";
}


const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlueBody;
function makeBlueBody() {
    document.body.style.backgroundColor = 'blue';
}

const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleBody() {
    document.body.style.backgroundColor = 'purple';
}


const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', pinkBtn);
function pinkBtn() {
    document.body.style.backgroundColor = 'pink';
}


const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function greenBtn() {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('make-orange').addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange';
})


function handleOnclick() {
    const handleStatus = document.getElementById('second-header');
    handleStatus.innerText = 'Change Text by onclick'
}

document.getElementById('event-listener').addEventListener('click', function() {
    const handleStatus = document.getElementById('second-header');
    handleStatus.innerText = 'Change Text by eventlistener';
})


document.getElementById('btn-update').addEventListener('click', function() {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = ' ';
})


document.getElementById('btn-post').addEventListener('click', function() {
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    commentBox.value = ' ';
})



// git hub delete style


document.getElementById('delete-confirm').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'delete') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true);
    }
})

document.getElementById('btn-delete').addEventListener('click', function() {
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
})