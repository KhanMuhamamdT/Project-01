console.log('script is live')

// Preparing the dataset 

var capitalQuiz = [

      {
            "country_id": "Germany",
            "option1": "Munich",
            "option2": "Frankfurt",
            "option3": "Berlin",
            "option4": "Stuttgart",
            "match": "Berlin",
      },

      {
            "country_id": "Norway",
            "option1": "Copenhagen",
            "option2": "Oslo",
            "option3": "Helsinki",
            "option4": "Stockholm",
            "match": "Oslo",
      }

      //       {
      //             "country_id": "Denmark",
      //             "option1": "Oslo",
      //             "option2": "Helsinki",
      //             "option3": "Stockholm",
      //             "option4": "Copenhagen",
      //             "match": "Stockholm",

      //       },

      //             {
      //                   "country_id": "Spain",
      //                   "option1": "Madrid",
      //                   "option2": "Barcelona",
      //                   "option3": "Pamplona",
      //                   "option4": " Lisbon",
      //                   "match": "Madrid",


      //       },


      //       {
      //             "country_id": "Chile",
      //             "option1": "La Paz",
      //             "option2": "Santiago",
      //             "option3": "Buenos Aires",
      //             "option4": "Sao Paulo",
      //             "match": "Santiago",


      // },




      // {
      //       "country_id": "Colombia",
      //       "option1": "Lima",
      //       "option2": "Bogota",
      //       "option3": "Rio Di Janeiro",
      //       "option4": "Santiago",
      //       "match": "Bogota",


      // },






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
let optionCity

function breakLine(element) {
      var brk
      br = document.createElement("br")
      element.appendChild(br)
}

function createOptionButton(radioName, optionCity) {

      radio_btn = document.createElement("INPUT")
      radio_btn.setAttribute("type", "radio")
      radio_btn.setAttribute("name", radioName)

      radio_btn.setAttribute("city", optionCity)
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
      optionCity = capitalQuiz[i].option1
      //  Question 
      newDiv = document.createElement("p")
      newDiv.setAttribute("align-content", "center")
      newDiv.setAttribute("id", capitalQuiz[i].country_id + 'p')
      newcontent = document.createTextNode('What is the captal of ' + capitalQuiz[i].country_id + '?')

      newDiv.appendChild(newcontent)
      element.appendChild(newDiv)

      //option 1
      breakLine(element)

      console.log(radioName + ' ' + optionCity)
      createOptionButton(radioName, optionCity)
      createDivLabel(element, capitalQuiz[i].option1)


      //  Option 2
      breakLine(element)
      createOptionButton(radioName, capitalQuiz[i].option2)
      createDivLabel(element, capitalQuiz[i].option2)

      // option 3    

      breakLine(element)
      createOptionButton(radioName, capitalQuiz[i].option3)
      createDivLabel(element, capitalQuiz[i].option3)

      //option 4
      breakLine(element)
      createOptionButton(radioName, capitalQuiz[i].option4)
      createDivLabel(element, capitalQuiz[i].option4)
      breakLine(element)

}
//console.log(radio_btn)




let buttonClick = document.getElementById("button")




buttonClick.addEventListener('click', calculateResult)

function calculateResult() {


      for (let i = 0; i < capitalQuiz.length; ++i) {
            console.log('Loop Iteration ')
            let sel = document.getElementsByName(capitalQuiz[i].country_id)
            console.log(sel)
            let selinput = capitalQuiz[i].match
            let country = capitalQuiz[i].country_id + 'p'

            for (let i = 0; i < 4; i++) {



                  if (sel[i].checked) {


                        let selmatch = sel[i].getAttribute("city")
                        console.log('MK ' + selmatch)

                        if (selinput == selmatch) {
                              console.log('match found')
                              document.getElementById(country).style.color = "green"
                        }
                        else {
                              console.log(' match not found')
                              sel[i].innerText = 'wrong'
                              document.getElementById(country).style.color = "red"
                        }
                  }

                  // else{

                  // console.log( 'option not selected')
                  // }



            }
      }
}