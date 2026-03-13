"use client"

export default function Home(){

 const sendData = async ()=>{

  const res = await fetch("/api/user",{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body:JSON.stringify({
    name:"John",
    email:"john@gmail.com"
   })
  })

  const data = await res.json()

  alert(data.message)

 }

 return(

  <div style={{padding:"20px"}}>

   <h1>Call API Post</h1>

   <button onClick={sendData}>
    Send Data
   </button>

  </div>

 )

}