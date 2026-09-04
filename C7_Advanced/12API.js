fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then((data)=> {
        var joke = data.value;
        console.log("Joke is: ",joke);
    })
  .catch(error => console.error("Error: ", error));