import React, { Component } from 'react'

export class Bar extends Component {
  render() {
    return (
        <div className="flex">
            <div className="w-96 bg-alterra-blue h-screen p-5 relative">
                <div className="flex place-content-center pb-4">
                    <img className="logo" src="./src/assets/logo-ALTA-putih.png"/>
                </div>
                <div className="border-b-2 border-white"></div>
                    <ul className="menu menu-vertical pt-4">
                        <li className='flex  rounded-none p-1 cursor-pointer hover:bg-alterra-orange items-left gap-x-4'>
                            <a className='text-white text-base' href="#">Dashboard</a>
                        </li>
                        <li className='flex  rounded-none p-1 cursor-pointer hover:bg-alterra-orange items-left gap-x-4'>
                            <a className='text-white text-base' href="#">Mentee</a>
                        </li>
                        <div className="p-2 border-b-2 border-white"></div>
                        <li className='flex  rounded-none p-1 cursor-pointer hover:bg-alterra-orange items-left gap-x-4'>
                            <a className='text-white text-base' href="#">User</a>
                        </li>
                        <li className='flex  rounded-none p-1 cursor-pointer hover:bg-alterra-orange items-left gap-x-4'>
                            <a className='text-white text-base' href="#">Class</a>
                        </li>
                    </ul>
            </div>
            <div className="w-screen h-32 flex-15 pl-20 pt-10 z-10 bg-white shadow-md z-10 top-0">
                <div className="flex-none">
                   <h1 className="text-3xl font-semibold text-alterra-blue">Immersive Dashboard</h1>
                    <p className="text-right pr-10">Hello, </p> 
                </div>
                
            </div>
      </div>
    )
  }
}

export default Bar