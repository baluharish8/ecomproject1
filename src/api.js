import axios from "axios";
// const baseurl="http://localhost:5001/";
// const baseurl="http://localhost/"; //***Don't use any port bcz Default port(80) assigned 
// const baseurl="http://localhost:2500/"; //ubuntu server one
// const baseurl="http://localhost:3000/"
const baseurl="https://amused-newt-knickers.cyclic.cloud/";



export const getData = async () => {
    try {
      // Make the API call using Axios
      const response = await axios.get(baseurl+"users/")
      // If the API call is successful, set the data in the state
      console.log('Connection Established successfully.');
      return response;
    } catch (error) {
      // Handle the error without displaying the "Network Error" message
      console.log('Something went wrong. Please try again later.');
      return (true)
    }
  };

//  export async function getData(){

//     return await axios.get(baseurl+"users/")
// // console.log(res.data)

// }

export async function postData(data){
console.log(data)
    return await axios.post(baseurl+"users/",data,{headers:{ 'Content-Type': 'application/json' }})
}

export async function putData(id,data){
console.log(id)
    return await axios.put(baseurl+"users/"+id,data,{headers:{ 'Content-Type': 'application/json' }})
    // .then((response)=>{
    //   console.log("updatedSuccessfully",response)
    // })
    
}


export async function deleteData(id,getApi){

    return await axios.delete(baseurl+"users/"+id,{headers:{ 'Content-Type': 'application/json' }})
    // .then(response => {
    //         console.log('Delete successful', response);
        
    //       }
    // )
    //   .catch(error => {
    //     console.log('Delete failed', error);
    //   });
}