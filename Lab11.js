const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(" Nhap ten : ", (Ten) =>{
    rl.question("Nhap tuoi: ",(Tuoi) =>{
console.log(" Ten cua ban : "+Ten+"Tuoi cua ban: "+Tuoi);

if(Number(Tuoi>30)){
    console.log("Tuoi lon");
}else if(Number(Tuoi>20)){
    console.log("Tuoi 20");
}else if(Number(Tuoi>=15)){
    console.log("Tuoi 15");
}else{
    console.log("Tuoi hoi");
}
    });

});
