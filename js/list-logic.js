const form = document.getElementById('send-info').addEventListener('submit', saveTask);

//const button = document.getElementById('send-value');
const list = document.getElementById('item-list');

let newElement = document.createElement('span');

function saveTask (e){
    e.preventDefault();
    let product = document.getElementById('add-product').value;
    product.innerHtml
}
