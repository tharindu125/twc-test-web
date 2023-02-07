import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtVerify } from "jose";
export default function Welcome() {
  async function verify(token) {
    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET)
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token === undefined) window.location.href = "/Login";
    verify(token)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    <div className=" ellipse-1">
      <div className="ml-[13rem] mt-[13rem] body00">
        <div className="inline-flex ">
          <img src="n.jpg" alt="" className="w-5 h-5" />
          <h1 className="text-[25px] text-[#fffefe] font-bold -mt-3">twc</h1>
        </div>

        <div>
          <h1 className="text-[25px] text-[#ffffff] font-bold -mt-4">
            {" "}
            contacts{" "}
          </h1>
          <h1 className="text-[25px] text-[#ffffff] font-bold -mt-4">portal</h1>
        </div>

        <div>
          <h1 className="font-serif text-[80px] font-bold text-white">Welcome,</h1>
          <p className=" text-[40px] text-white">
            This is where your contacts will live. Click the button bellow{" "}
            <br /> to add a new contact.
          </p>

          <div className="mt-8">
            <a
              href="/AddFirstContact"
              className="border-[2px] text-white rounded-full px-5 py-1 text-[25px] mt-7 border-white font-bold"
              type="button"
            >
              add your first contact
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
