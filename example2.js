let i=2
const timer=setInterval(()=>{
    console.log(`${i} seconds passed`)
      i+=2
    if(i>16){
        clearInterval(timer)
    }
  
}, 2000)