var pageCounter=1
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn")
btn.addEventListener('click',function(){
    var HttpRequest = new XMLHttpRequest;
    HttpRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json')
    HttpRequest.onload = function(){
    var Data = JSON.parse(HttpRequest.responseText)
    renderHTML(Data)
    }
    HttpRequest.send()
    pageCounter++
    if(pageCounter > 3){
        btn.classList.add("hide-me")
    }
})

function renderHTML(data){
    var htmlString=""
    for(i=0;i<data.length;i++){
        htmlString +=data[i]
    }
     animalContainer.insertAdjacentHTML('beforeend',htmlString)

}
