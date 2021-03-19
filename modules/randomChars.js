const random =require("random")

const randomChars=(n)=>{
    let newStr=""
    for(let i=0;i<n;i++){
        newStr+= String.fromCodePoint(random.int(97,122));
    } 
     
    console.log(newStr)
}
module.exports={
    randomChars
}