document.getElementById('submit-btn').addEventListener('click', function() {
    const inputValue = document.getElementById('text-area').value;

    const container = document.getElementById('review');
    const li = document.createElement('li');
    li.innerText =  inputValue;
    container.appendChild(li);
    document.getElementById('text-area').value = ' ';
});


// keybaord event

const inputValue = document
.getElementById("text-area")
.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const inputValue = document.getElementById("text-area").value;
        const container = document.getElementById('review');
        const li = document.createElement("li");
        li.innerText = inputValue;
        container.appendChild(li);
        document.getElementById("text-area").value = "";
    }
});