document.getElementById('submit-btn').addEventListener('click', function() {
    const inputValue = document.getElementById('text-area').value;

    const container = document.getElementById('review');
    const li = document.createElement('li');
    li.innerText =  inputValue;
    container.appendChild(li);
    document.getElementById('text-area').value = ' ';
})