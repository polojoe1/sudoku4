import React, { useState } from 'react'

const Gameboard = (props) => {
    const [red, setRed] = useState(true)
    const addBoxer=()=>{
        if(red){
            let box = document.getElementById('boxer')
            box.classList.add('border-red-400')
        }
    }
    let board=([
        ['',2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]

    ])
  return (
    <div  onClick={()=>addBoxer()} className='flex justify-center flex-col  items-center p-20 '>
        <h1 className='text-5xl font-bold mb-10'>4x4 Sudoku</h1>
        {/* board */}
        
        <div id='boxer'  className='totalBoard border-4'>
        <div className="flex">
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[0][0]} /></div>
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[0][1]} /></div>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[0][2]} /></div>
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[0][3]} /></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[1][0]} /></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[1][1]} /></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[1][2]}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[1][3]}/></div>
                        </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[2][0]}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[2][1]}/></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[2][2]}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[2][3]}/></div>
                        </div>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[3][0]}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[3][1]}/></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[3][2]}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold' type="number" min='1' max='4' name="" id="" value={board[3][3]}/></div>
                        </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Gameboard