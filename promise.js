const p = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("me"))
    },2000)
   
})
p.then(result => console.log(result)).catch(err=> console.log(err.message))

const result = true
const test = new Promise((resolve,reject) =>{
       if (result == true){
        resolve([1,2,3])
       } else{
        reject("error")
       }
   } )

test.then((resolve)=>{
 console.log(resolve)
}).catch((error)=>
    console.log(error)
)
