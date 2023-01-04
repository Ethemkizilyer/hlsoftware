import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [list,setList]=useState([])
    const getData=async()=>{
try {
    const {data} = await axios.get("https://api.kitapbulal.com/test/getproducts");
    console.log(data);
    setList(data)
} catch (error) {
    console.log(error.message)
}
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border">
              <thead className="bg-slate-200 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    RESİM
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ÜRÜN ADI
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    FİYAT
                  </th>
                </tr>
              </thead>
              <tbody>
                {list?.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border whitespace-nowrap">
                      <img className="w-16" src={item.imageUrl} alt="image" />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border  whitespace-nowrap">
                      {item.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home