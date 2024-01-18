//forOfLoop
//ForInLoop

//forOfLoop
const names= ["YouTube", "Facebook", "Instagram", "Netflix", "Amazon" , "X","Thread"];
for(const n of names){
        console.log(n);
}

const symbols = {
    yt: "YouTube",
    fb: "Facebook",
    IG: "Instagram",
    LCO: "LearnCodeOnline"
}

for(const n in symbols){
    //key is the ouptup
    console.log(n);
}

for(const n in symbols){
    //value is the ouptup
    console.log(symbols[n]);
}

for(const n in symbols){
    // ouptup: key and value
    console.log(`key is ${n} and value is ${symbols[n]}`);
}