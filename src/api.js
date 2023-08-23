import axios from "axios";
// const baseurl="http://localhost:5001/";
// const baseurl="http://localhost/"; //***Don't use any port bcz Default port(80) assigned 
const baseurl="https://amused-newt-knickers.cyclic.cloud/";



export const getData = async () => {
    try {
      // Make the API call using Axios
      const response = await axios.get(baseurl+"products/")
      // If the API call is successful, set the data in the state
      console.log('Connection Established successfully.');
      return response;
    } catch (error) {
      // Handle the error without displaying the "Network Error" message
      console.log('Oops! Something went wrong. Please try again later.');
      return (true)
    }
  };

//  export async function getData(){

//     return await axios.get(baseurl+"users/")
// // console.log(res.data)

// }

export async function postData(data){
console.log(data)
    return await axios.post(baseurl+"products/",data,{headers:{ 'Content-Type': 'application/json' }})
}

export async function putData(id,data){
console.log(id)
    return await axios.put(baseurl+"products/"+id,data,{headers:{ 'Content-Type': 'application/json' }})
    // .then((response)=>{
    //   console.log("updatedSuccessfully",response)
    // })
    
}


export async function deleteData(id,getApi){

    return await axios.delete(baseurl+"products/"+id,{headers:{ 'Content-Type': 'application/json' }})
    // .then(response => {
    //         console.log('Delete successful', response);
        
    //       }
    // )
    //   .catch(error => {
    //     console.log('Delete failed', error);
    //   });
}