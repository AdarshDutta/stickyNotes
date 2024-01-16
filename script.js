function addNote() {
    const noteText = document.getElementById('noteText').value;
    const noteColor = document.getElementById('noteColor').value;

    if (!noteText.trim()) {
        alert('Please enter a note before adding.');
        return;
    }

    const notesContainer = document.getElementById('notesContainer');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.style.backgroundColor = noteColor;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function () {
        notesContainer.removeChild(noteElement);
    };

    noteElement.innerHTML = `<p>${noteText}</p>`;
    noteElement.appendChild(deleteButton);
    notesContainer.appendChild(noteElement);

    // Clear input fields
    document.getElementById('noteText').value = '';
}
