// import axios from "axios"
// const response = axios
// let characters: any[]
//   fetch  ("http://localhost:3000/items")
//   .then(function (response:any) {
//     characters = response
//     console.log(characters);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
let characters: any[];
async function fetchData() {
  const response = await fetch("http://localhost:3000/items");
  const sec_response = await response.json();
  //console.log(sec_response);
  characters = sec_response;
  console.log(characters[5]);
}
fetchData();