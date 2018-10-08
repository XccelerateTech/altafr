// Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.

function clearHtml(id) {
    document.getElementById(id).innerHTML = '';
}
