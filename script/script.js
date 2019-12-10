console.log('script is live')

// Preparing the dataset 

var capital_quiz = [

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




var newdiv
var newcontent
var element
var radio
var div_lbl
var div_txt
var radioname
var input_value
var option

function brek_line(element) {
      var brk
      br = document.createElement("br")
      element.appendChild(br)
}

function create_optionbutton(radioname) {

      radio_btn = document.createElement("INPUT")
      radio_btn.setAttribute("type", "radio")
      radio_btn.setAttribute("name", radioname)
      radio_btn.setAttribute("city", "1111111111")
      radio_btn.setAttribute("Class", "rad")
      
      element.appendChild(radio_btn)

}



function create_divlbl(element, option) {
//      var lbl = document.createElement("LABEL")
//     var  lbltxt = document.createTextNode(option)
//        element.appendChild(lbltxt)
      div_lbl = document.createElement("div")
      div_txt = document.createTextNode(option)
      div_lbl.appendChild(div_txt)
      element.appendChild(div_lbl)



}


for (let i = 0; i < capital_quiz.length; ++i) {
      element = document.getElementById("content")
      brek_line(element)

      radioname = capital_quiz[i].country_id
      //  Question 
      newdiv = document.createElement("p")
      newdiv.setAttribute("align-content","center")
      newcontent = document.createTextNode('What is the captal of ' + capital_quiz[i].country_id + '?')
      
      newdiv.appendChild(newcontent)
      element.appendChild(newdiv)
      

      //option 1
      brek_line(element)
      create_optionbutton(radioname)
      create_divlbl(element, capital_quiz[i].option1)


      //  Option 2
      brek_line(element)
      create_optionbutton(radioname)
      create_divlbl(element, capital_quiz[i].option2)

      // option 3    

      brek_line(element)
      create_optionbutton(radioname)
      create_divlbl(element, capital_quiz[i].option3)

      //option 4
      brek_line(element)
      create_optionbutton(radioname)
      create_divlbl(element, capital_quiz[i].option4)
      brek_line(element)

}
console.log(radio_btn)



