const uno = () =>{
    console.log("I am single");
    setTimeout(()=>{
        console.log("Wohoooo");
    }, 5000);
}

const dos = () =>{
    console.log("I am double");
    setTimeout(tres, 3000);
}

const tres = () =>{
    console.log("I am triple");
}

uno();
dos();
//tres();
