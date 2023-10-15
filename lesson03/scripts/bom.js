const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const feedback = document.querySelector('#feedback');

button.addEventListener('click', () => {
    if(input.value) {

        console.log('clicked');

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = '';
        input.focus();

    } else {
        input.focus();
        feedback.textContent = 'Please enter a Book and Chapter.'
    }
})

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {displayList(chapter);});

function displayList(item) {

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', ()=> {list.removeChild(li); deleteChapter(li.textContent); input.focus();});

}

function setChapterList() {
    localStorage.setItem('favChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favChapters'));
}

function deleteChapter(chapter) {

    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();

}


