import React from 'react'

function Hero() {
  return (
    <div className="box-border p-4 border-4 border-cyan-700">
        <div className="flex justify-center">
            <div className=" px-2 rounded-xl border-2 border-pink-300 items-center box py-5 w-96 shadow-lg mt-10 rounded-b-3xl hover:bg-pink-100">
              <h1 className="font-semibold px-7 text-gray-700  text-5xl">LeaderBoards</h1>
            </div>
        </div>
        
        <div>
        <div className="flex flex-col border-4 rounded-2xl  border-slate-500 my-20">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className=" max-w-7xl mx-auto">
                    <div className="flex justify-evenly">
                         <h1 className="font-bold text-3xl  relative">Basic Backtest</h1>
                         <div className="flex relative w-full lg:max-w-sm">
                           <p className="py-3">Slippage</p>
                            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                               <option>0%</option>
                               <option>0.5%</option>
                               <option>1%</option>
                           </select>
                        </div>

                      </div>
                        <table className="min-w-full shadow-lg divide-y divide-pink-200 max-w-7xl mx-auto border-fuchsia-400 bottom-4 border rounded-3xl mt-4">
                            <thead className="bg-gray-50  h-20">
                                <tr >
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                        Rank	 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                        Calmar Ratio
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                        Overall Profit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                        Avg. Daily Profit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                        Win %(Day)
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                                        Price (Rs)
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                                        Action
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-pink-200 shadow-lg ">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     Selling with re entr 
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.96</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>

                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                     381845  
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                     319.54
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.65
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    strategy_name
                                    </td>
                                   
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.62</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>



                                    
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    268872.5 
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    216.31
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.64
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     500
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                            Buy 
                                        </a>
                                    </td>                        
                               </tr>
                                <tr>
                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     3
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Based on premium and
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.42</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    255425
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    208.51
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.64
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     4
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    strategy_name
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.22</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    370845 
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    303.47
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.65
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     5
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    strategy_name
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.22</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    370845
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    303.47
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.65
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     6
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    Based on premium wit 
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">3.01</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    135980  
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    185.77
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    0.49
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     7
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    strategy_name
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">2.76</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    
                                    <td className="px-6 py-4 text-sm  text-gray-800  whitespace-nowrap">
                                    267867.5
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    218.49
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.6
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     8
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     Wait and trade_Save
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">2.62</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    178252.5 
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    161.9
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.63
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td> 
                                </tr>
                                <tr>
                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     9
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    iron condor
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">2.44</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    176420
                                    </td>
                                    <td className="px-6 py-4 text-sm  text-gray-800 whitespace-nowrap">
                                    137.51
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.65
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td>    
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                     10
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     strategy_name
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  <span className="flex items-center">
    <span className="mr-1">2.04</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 4l-8 8h16l-8-8z" clipRule="evenodd" />
    </svg>
  </span>
</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    244555 
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    198.66
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     0.62
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     - 
                                    </td>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className=" text-blue-500 hover: text-violet-700"
                                            href="#">
                                             View
                                        </a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    </div>
  )
}

export default Hero;