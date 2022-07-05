

let searchBar=document.getElementById('search-bar');
let body=document.getElementById('table-body');
let searchBtn=document.getElementById('button');

function createRow(element){

    let column=document.createElement('td');
    column.innerHTML=element;
    return column;

}


 async function fetchData() {
    try{
    let response = await fetch('https://swapi.dev/api/people/');
let data= await response.json();


for(let i=0; i<data.results.length; i++){

if(searchBar.value===data.results[i].name){
        let row=document.createElement('tr')
row.appendChild(createRow(data.results[i].name));
 row.appendChild(createRow(data.results[i].height));
row.appendChild(createRow(data.results[i].mass));
row.appendChild(createRow(data.results[i].birth_year)); 
body.appendChild(row);
return;
}
}
  alert('No user found');
return;
}
  catch (error) {
        console.log("Error loading data",error);
    }
}
searchBtn.addEventListener('click',function(event){
      event.preventDefault();
fetchData();

});

