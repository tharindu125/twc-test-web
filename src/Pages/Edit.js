import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtVerify } from "jose";

export default function Edit() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [owner, setOwner] = useState("");

  async function verify(token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET)
      );
      return payload;
    } catch (error) {
      return false;
    }
  }
  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token === undefined) window.location.href = "/Login";
    verify(token)
      .then(async (result) => {
        const { email } = result.user;
        setOwner(email);
        fetch(`http://127.0.0.1:5000/contact/${id}`)
          .then((res) => res.json())
          .then((data) => {
            const {name,email,phone_number,gender} = data;
            setName(name)
            setEmail(email)
            setPhone(phone_number)
            setGender(gender)
            if (gender === 'Male') document.getElementById('male').checked  = true
            if (gender === 'Female') document.getElementById('female').checked  = true
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addContact = async()=>{
    try {
        const res = await fetch(`http://localhost:5000/contact/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,phone_number:phone,gender,owner})
        })
        if (!res.ok) {
            const {error} = await res.json()
            throw Error(error)
        }
        if (res.ok) window.location.href = '/Contacts'
    } catch (error) {
        console.log(error.message);
    }
    console.log({name,email,phone,gender});


    
  }

  return (
    <>
    <div className=" ellipse-1">
      <div className='mt-[11rem] ml-20  body00'>
        <div className='mt-20 ml-40 '>

          <div className='inline-flex '>
              <img src="logo.png" alt="" className="w-5 h-5 "/>
              <h1 className='text-[25px] text-[#ffffff] font-bold -mt-3'>twc</h1>
          </div>

          <div>
              <h1 className='text-[25px] text-[#ffffff] font-bold -mt-4'> contacts </h1>
              <h1 className='text-[25px] text-[#ffffff] font-bold -mt-4'>portal</h1>
          </div>

          <div>
            <h1 className='font-sans text-[50px] font-bold my-8 text-[#ffffff]'>Edit</h1>
          </div>

        </div>
        
        <div className="grid h-32 grid-cols-2 gap-2 mx-40 place-content-center">

          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
            className=" mt-14 rounded-full h-16 w-[28rem] text-[#083F46] text-[25px] pl-3 placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold bg-white"
            placeholder="      full name"
          />
          <input
            type="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            className=" mt-14 rounded-full h-16 w-[28rem] text-[#083F46] text-[25px] pl-3 placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold bg-white"
            placeholder="      e-mail"
          />
          <input
            type="text"
            value={phone}
            onInput={(e) => setPhone(e.target.value)}
            className=" mt-14 rounded-full h-16 w-[28rem] text-[#083F46] text-[25px] pl-3 placeholder:text-[#083F46]  placeholder:text-[25px] placeholder:font-bold bg-white"
            placeholder="      phone number"
          />
          <form className="flex mx-5 text-[25px] font-bold my-10 text-[#ffffff]">
            <label>gender</label>
            <input
            id="male"
              type="radio"
              className="mx-5"
              name="gender"
              onInput={() => {
                setGender("Male");
              }}
            />
            <label for="html">male</label>
            <br />
            <input

            id="female"
              type="radio"
              className="mx-5"
              name="gender"
              onInput={() => {
                setGender("Female");
              }}
            />
            <label for="css">female</label>
            <br />
          </form>
          
        </div>

        <div className='mx-40 mt-28 text-[#ffffff]'>
            <button onClick={addContact} className='border-[2px] rounded-full px-5 py-1 text-[25px] border-white font-bold' 
                      type='button' >save</button>
        </div>
    </div>
  </div>
</>
    
  );
}
