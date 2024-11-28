let pageViews = JSON.parse(localStorage.getItem('pageViews'));
for (let pageViewsElement of pageViews) {
    let list = document.getElementById('list');
    let li = document.createElement('li');
    li.innerText = pageViewsElement;
    list.appendChild(li);
}