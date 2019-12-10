console.log('script is live')

// Preparing the dataset 

var capitalQuiz = [

      {
            "country_id": "Germany",
            "option1": "Munich",
            "option2": "Frankfurt",
            "option3": "Berlin",
            "option4": "Stuttgart",
            "match": "A",
      },

      {
            "country_id": "Norway",
            "option1": "Copenhagen",
            "option2": "Oslo",
            "option3": "Helsinki",
            "option4": "Stockholm",
            "match": "A",
      },

      {
            "country_id": "Denmark",
            "option1": "Oslo",
            "option2": "Helsinki",
            "option3": "Stockholm",
            "option4": "Copenhagen",
            "match": "A",
   
      },
     
            {
                  "country_id": "Spain",
                  "option1": "Madrid",
                  "option2": "Barcelona",
                  "option3": "Pamplona",
                  "option4": " Lisbon",
                  "match": "A",
     
                  
      },


      {
            "country_id": "Chile",
            "option1": "La Paz",
            "option2": "Santiago",
            "option3": "Buenos Aires",
            "option4": "Sao Paulo",
            "match": "A",

            
},




{
      "country_id": "Colombia",
      "option1": "Lima",
      "option2": "Bogota",
      "option3": "Rio Di Janeiro",
      "option4": "Santiago",
      "match": "A",

      
},






]




let newDiv
let newContent
let element
let radio
let divLabel
let divText
let radioName
let inputValue
let option

function breakLine(element) {
      var brk
      br = document.createElement("br")
      element.appendChild(br)
}

function createOptionButton(radioName) {

      radio_btn = document.createElement("INPUT")
      radio_btn.setAttribute("type", "radio")
      radio_btn.setAttribute("name", radioName)
      radio_btn.setAttribute("city", "1111111111")
      radio_btn.setAttribute("Class", "rad")
      
      element.appendChild(radio_btn)

}

function createDivLabel(element, option) {
      divLabel = document.createElement("div")
      divText = document.createTextNode(option)
      divLabel.appendChild(divText)
      element.appendChild(divLabel)



}


for (let i = 0; i < capitalQuiz.length; ++i) {
      element = document.getElementById("content")
      breakLine(element)

      radioName = capitalQuiz[i].country_id
      //  Question 
      newDiv = document.createElement("p")
      newDiv.setAttribute("align-content","center")
      newcontent = document.createTextNode('What is the captal of ' + capitalQuiz[i].country_id + '?')
      
      newDiv.appendChild(newcontent)
      element.appendChild(newDiv)
      

      //option 1
      breakLine(element)
      createOptionButton(radioName)
      createDivLabel(element, capitalQuiz[i].option1)


      //  Option 2
      breakLine(element)
      createOptionButton(radioName)
      createDivLabel(element, capitalQuiz[i].option2)

      // option 3    

      breakLine(element)
      createOptionButton(radioName)
      createDivLabel(element, capitalQuiz[i].option3)

      //option 4
      breakLine(element)
      createOptionButton(radioName)
      createDivLabel(element, capitalQuiz[i].option4)
      breakLine(element)

}
console.log(radio_btn)




let buttonClick = document.getElementById("button")




buttonClick.addEventListener('click', calculateResult)

function calculateResult ()

{

console.log ("Result live ")

}