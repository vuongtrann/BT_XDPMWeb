
var dataAPI = 'https://62135d56f43692c9c601d020.mockapi.io/vd4';

function start(){
    getData(renderData);

}


start();

//Funtions

function getData(callback){
    fetch(dataAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
function renderData(data){
    var listDataBlock = document.querySelector('#list-data');
    var htmls = data.map(function(data){
        return `
            <div class="item-${data.id}">
            <h4>ID = ${data.id}  || Name = ${data.name}</h4>
            <img src="${data.avatar}" height= "50px", weight="50px">
            <button onclick="handleDeleteData(${data.id})">Delete</button>
            </div>
        `;
    });
    listDataBlock.innerHTML = htmls.join('');
}
function handleDeleteData(id){
    var option = {
        method: 'DELETE',
        Headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(dataAPI + '/' + id,option)
        .then(function(response){
            response.json();
        })
        .then(function(){
           var dataItem = document.querySelector('.item-' +id);
           if(dataItem){
               dataItem.remove();
           }
        });
}