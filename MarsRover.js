// const result = document.querySelector("#rover-img")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click", function() {
//     fetch('https://api.nasa.gov/planetary/apod')
//     .then(result => result.json())
//     .then(data => {
//         result.innerHTML = `<img src='${data}'/>`
//     })
// })



// assigned the button to the variable name 'generateBtn' 
let generateBtn = document.querySelector("#btn");
// adding an event listener to the button with the event being a click, console.logs 'button pressed'. and a function that will run the function sendApiRequest
generateBtn.addEventListener("click", () =>{
    console.log('button pressed')
    sendApiRequest()
})

// using a async function because we're sending out a request for data
// asyncronus function named sendApiRequest
async function sendApiRequest(){
    // assigning the mars rover API key to the variable API_KEY
    let API_KEY = 'Sf5pKLS8TXs92bL9goVFmfwYt5DwFGlKHJpa2rZd'
    // created a variable that waits for the data to be fetched and interpolating the api key variable
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    // console.log the data that comes back to us to see if it worked or not(looking for status 200)
    console.log(response)
    // assigned a variable to wait for the data to come back so we could get the json or data from response
    let data = await response.json()
    // console.logging data to see what the data is(I want the url of the image)
    console.log(data)
    // running useApiData function with a parameter which passes the data to it
    useApiData(data)
}

// function with the parameter that passes the data into it
function useApiData(data) {
    // selecting our div that we want the explanation of the image and the image that we want to be targeted
    document.querySelector('#rover-img').innerHTML = `${data.explanation}`
    document.querySelector('#rover-img').innerHTML = `<img src="https://apod.nasa.gov/apod/image/2107/PIA24542_fig2_1100c.jpg">`
}