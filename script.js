

let playerTime=0

let arraySquare=[1,0,1,
                 0,1,0,
                 1,0,1,]

let i =0
let square = document.getElementsByClassName ( "square")[0]

 document.addEventListener("click",(event)=>{
    console.log(event.target.id)
    square = document.getElementsByClassName ( "square")[event.target.id]
   
    let mainArray=[
    
        function coelho(){
            square.style.backgroundImage= "url(coelho.png)"
        },
        function barata(){
            square.style.backgroundImage= "url(barata.png)"
    
        }]
        mainArray[arraySquare[i]]()
        i++
        

})
let teste=square[0]





 




