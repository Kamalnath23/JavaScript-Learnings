const uno = () =>{
    return "I am single";
}

const dos =  () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am double");
        }, 3000);
    });
}

const tres = () =>{
    return "I am triple";
}

const callMe= async ()=>{
    const value1 = uno();
    console.log(value1);
    
    const value2 = await dos();
    console.log(value2);

    const value3 = tres();
    console.log(value3);

}

callMe();