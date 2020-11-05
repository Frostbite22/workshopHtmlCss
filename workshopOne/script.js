

window.addEventListener('load', function() 
{

    //adding and removing class for the navbar
    var navElements = document.getElementsByClassName("nav")[0].children; 
   
    Array.from(navElements).forEach(function clickedOne(ancre){ 
        ancre.addEventListener("click",function changeActive(){
            for(let ancre of navElements)
            {
                ancre.classList = "" ; 
            }
            console.log(ancre.classlist) ; 
            ancre.classList = "active" ; 
 
        });
    });
    


var buttons = document.getElementsByClassName("send") ; 
//Buttons are of Type htmlCollection ; we need to convert them to arrays 
// so we can use the method forEach 
Array.from(buttons).forEach(function getClicked(button){
    //for each button, we add an eventListener so when we click on it 
    // we trigger the function selectedOption 
    // the function selectedOption fetchs the selected option
    button.addEventListener('click',function selectedOption(){
        // nom 
        var nom = button.parentElement.parentElement.children[0].innerText ; 
        // prenom 
        var prenom = button.parentElement.parentElement.children[1].innerText ; 
        // options
        var optionsCollection = button.parentElement.parentElement.children[2].children[0] ; 
        var value = optionsCollection.options[optionsCollection.selectedIndex].value;
        var role = optionsCollection.options[optionsCollection.selectedIndex].text;
        console.log(role,value,nom,prenom);
        // Create a <h1> element
        var h = document.createElement("H1")                
        // Create a text node
        var t = document.createTextNode(`hello ${nom} ${prenom} aka ${role} [${value}] ! how are you?`); 
        // Append the text to <h1>    
        h.appendChild(t);                                   
        //get the team id element 
        team = document.getElementById("team"); 
        team.appendChild(h); 
    }); 
});
}); 



    



