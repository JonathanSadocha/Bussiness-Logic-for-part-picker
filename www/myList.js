const myList = document.querySelector('#myList');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().RAM;


    li.appendChild(name);


    myList.appendChild(li);
}

// getting data
db.collection('Lists/KLWKx3wSkiqeh8zSO52s').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        if (doc && doc.exists) {
        renderCafe(doc);
        }
    });
});
