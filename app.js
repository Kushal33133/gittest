// // let url = "https://catfact.ninja/fact";

// // fetch(url).then((response)=>{
// //     console.log(response)
// // })
// // .catch((err)=>{
// //     console.log("ERROR",err)
// // })

// // async await
// let url = "https://catfact.ninja/fact";

//  async function getFact(){
//     try{

//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data )
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2 )
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log("PAPHDFGFDFTDFY")
// }

// getFact()

// Axios
// Libary to make HTTP request
// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let fact = await getFact();
//   let print = document.querySelector("#fact");
//   print.innerText = fact;
//   console.log(fact);
// });
// let url = "https://catfact.ninja/fact";

// async function getFact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (err) {
//     console.log(err);
//     return "No fact found";
//   }
// }
// getFact();


// const url = "https://icanhazdadjoke.com/"

// async function getFact() {
//   try {
//     const config = {headers:{Accept:"application/json"}}
//     let res = await axios.get(url,config);
//     console.log( res);
//   } catch (err) {
//     console.log(err);
//     return "No fact found";
//   }
// }
// getFact();
