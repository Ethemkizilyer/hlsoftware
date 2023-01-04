import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postApp } from "../features/userSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  });

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postApp(user));
  };

  return (
    <div className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-[600px] mt-16">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="form-group mb-6">
            <input
              type="text"
              required
              value={user?.Name}
              onChange={(e) => setUser({ ...user, Name: e.target.value })}
              className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="Adayın Adı Soyadı"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="tel"
              required
              value={user?.PhoneNumber}
              onChange={(e) =>
                setUser({ ...user, PhoneNumber: e.target.value })
              }
              className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Telefon Numarası (5XXXXXXXX)"
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            value={user?.Email}
            required
            onChange={(e) => setUser({ ...user, Email: e.target.value })}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="E-Posta Adresi"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            required
            onChange={(e) => setUser({ ...user, Message: e.target.value })}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Mesaj"
            defaultValue={""}
          />
        </div>

        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;
