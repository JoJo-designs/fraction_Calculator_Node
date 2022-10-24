// whole number function only works in muiltpication file
// this file is a test to see if I can make a function that works

let sn = 10
let sd = 8
let wholeN = 0

const wholeNum = () => {
    console.log(sn, sd)
   if ( sn > sd ) {
    sn = sn - sd
    console.log(sn)
    wholeN = wholeN + 1
    wholeNum()
   }
   yah()
}  

const yah = () => {
    console.log(`the answer is ${wholeN} ${sn}/${sd}`)
}

wholeNum();

// just a idea... for (let i = 0; i < 1; i++)