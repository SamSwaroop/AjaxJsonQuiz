var pageCounter=1
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn")
btn.addEventListener('click',function(){
    var HttpRequest = new XMLHttpRequest;
    HttpRequest.open('GET','https://raw.githubusercontent.com/SamSwaroop/AjaxJsonQuiz/main/example.json')
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
        animalContainer.insertAdjacentHTML('beforeend',data[i])
    }
     

}
