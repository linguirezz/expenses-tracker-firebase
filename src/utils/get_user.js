import axios from "axios";
async function getUser (url){
  try{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNDRhYWQzLTNmYzAtNDNjZi1hZGJjLWRlZTY3MmIxMjg3YyIsImlhdCI6MTcyMjYxMjcxMCwiZXhwIjoxNzIyNjE2MzEwfQ.A7vm2QLRibWFsJritSXrQYEFFXsLoju5K85EGKxD4r8"
    const fetchBody = await axios.get(url,{
      headers:{
       token:token
      }
    })
    const  datas = fetchBody.data
    return datas 
  }catch(err){
    console.log(err)}
}
const data = await getUser('http://localhost:3150/dashboard/') 
export {data}