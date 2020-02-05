const sharedList = document.querySelector('#sharedList');

function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;

    li.appendChild(name);

    sharedList.appendChild(li);
}

// getting data
db.collection('CommunityList').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

