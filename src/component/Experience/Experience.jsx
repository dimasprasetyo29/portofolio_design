import React from "react";
 
const experience = () => {
    return <div className="dark:bg-black text-white
    dark:text-white py-4">
              <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                           <div className="bg-dark/50 p-4 grid place-item-center">
                            <div className="text-center space-y-3">
                                <h1 className="text-5xl font-bold">22</h1>
                                <p className="text-xl font-semibold">years of experience</p>
                            </div>
                           </div>
                          
                           <div className="grid grid-rows-2 gap-4">
                            <div className="text-center p-6 bg-dark">
                            <h1 className="text-3-xl font-bold">600+</h1>
                            <p>happy client</p>
                            </div>
                            <div className="text-center p-6 bg-dark">
                            <h1 className="text-3-xl font-bold">1200+</h1>
                            <p>cars sold out</p>
                            </div>

                           </div>
                           <div className="grid grid-rows-2 gap-4">
                            <div className="text-center p-6 bg-dark">
                            <h1 className="text-3-xl font-bold">60+</h1>
                            <p>collaboration with companiest</p>
                            </div>
                            <div className="text-center p-6 bg-dark">
                            <h1 className="text-3-xl font-bold">120+</h1>
                            <p>projects completed</p>
                            </div>
                           </div>
              </div>
              </div>
              
    </div>;
};
export default experience;