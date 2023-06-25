const fs =require("fs");


//  fs.readFile("./sample.txt", "utf-8", (err,data)=>{
//     if (err){
//         throw err;
//     }
//     console.log(data)
// })
// console.log("I am free") //in async this is executed 1st then the above data is printed.

// const a = fs.readFileSync("./sample.txt", "utf-8")
//     console.log(a) // After using Sync we could 1st complete this then the below prints. This is happening in sychronized manner

// console.log("I am free")

const line = "Welocome to Node fs readFile after a long time in your new DELL device"
fs.writeFile("./info.txt",  line, ()=>{
    console.log("file written")
})

console.log("I am free");