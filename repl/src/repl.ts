import xtring from "./../../app/src/xtring"
//const testElem = document.querySelector("#test")

//xtring()

import { performance } from "perf_hooks"



function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function capitalizeFirstLetterThis(string) {
  return this[0].toUpperCase() + this.slice(1);
}

//@ts-ignore
String.prototype.cap = capitalizeFirstLetterThis

const max = 100000000


let startTime, endTime





// is seems direction biased: whatever comes first is faster
setTimeout(() => {


  startTime = performance.now()


  for (let i = 0; i < max; i++) {
    //@ts-ignore
    capitalizeFirstLetter("hello")
  }


  endTime = performance.now()

  let funcDelta = endTime - startTime


  // -----------------------------------------------

  setTimeout(() => {
    startTime = performance.now()

    for (let i = 0; i < max; i++) {
      //@ts-ignore
      "hello".cap()
    }
  
    endTime = performance.now()
  
    let protoDelta = endTime - startTime


    setTimeout(() => {
      console.log("func", funcDelta)
      console.log("proto", protoDelta)
    
      console.log("---------------- results ----------------")
      console.log("proto is faster by: ", funcDelta - protoDelta)
    }, 300)
  }, 1000)


  
}, 1000);

