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
    <div className='mt-20 ml-40 '>

      <div className='inline-flex '>
          {/* <img src='n.jpg'  alt='' className='w-5 h-5'/> */}
          <img src="n.jpg" alt="" className="w-5 h-5 "/>
          <h1 className='text-[25px] text-[#060606] font-bold -mt-3'>twc</h1>
      </div>

      <div>
          <h1 className='text-[25px] text-[#000000] font-bold -mt-4'> contacts </h1>
          <h1 className='text-[25px] text-[#020202] font-bold -mt-4'>portal</h1>
      </div>

      <div>
        <h1 className='font-serif text-[50px] font-bold my-5'>Edit</h1>
      </div>

    </div>
    
    <div className="grid h-32 grid-cols-2 gap-2 mx-40 place-content-center">

      <input
        type="text"
        value={name}
        onInput={(e) => setName(e.target.value)}
        className=" mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-3 placeholder:text-[#f9f9f9]  placeholder:text-[25px] placeholder:font-bold bg-black"
        placeholder="      full name"
      />
      <input
        type="email"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
        className=" mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-3 placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black"
        placeholder="      e-mail"
      />
      <input
        type="text"
        value={phone}
        onInput={(e) => setPhone(e.target.value)}
        className=" mt-14 rounded-full h-16 w-[28rem] text-zinc-50 text-[25px] pl-3 placeholder:text-[#ffffff]  placeholder:text-[25px] placeholder:font-bold bg-black"
        placeholder="      phone number"
      />
      <form className="flex mx-5 text-[25px] font-bold my-10">
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
        <div className='mx-40 mt-28 '>
            <span onClick={addContact} className='border-[3px] rounded-full px-5 py-1 text-[25px] border-black font-bold' 
                      type='button' >save</span>
        </div>
    </>
    
  );
}
