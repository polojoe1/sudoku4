import React, { useState } from 'react'

const Gameboard = (props) => {
    const [success,setSuccess] = useState(false)
    const addBoxer=()=>{
        if(success===false){
            let box = document.getElementById('boxer')
            box.classList.add('border-blue-200')
        }
    }
    const generateNum = () => {
        let randomNum = Math.floor(Math.random() * 6 + 1)
        return randomNum>4?'':randomNum
    }
    
    let board=([
        //find  a way to make it random
        
        [generateNum(),generateNum(),generateNum(),generateNum()],
        [generateNum(),generateNum(),generateNum(),generateNum()],
        [generateNum(),generateNum(),generateNum(),generateNum()],
        [generateNum(),generateNum(),generateNum(),generateNum()]
//also nake logic for rows and columns
    ])
    const [zeroZero, setZeroZero] = useState(board[0][0])
    const [zeroOne, setZeroOne] = useState(board[0][1])
    const [zeroTwo, setZeroTwo] = useState(board[0][2])
    const [zeroThree, setZeroThree] = useState(board[0][3])

    const [oneZero, setOneZero] = useState(board[1][0])
    const [oneOne, setOneOne] = useState(board[1][1])
    const [oneTwo, setOneTwo] = useState(board[1][2])
    const [oneThree, setOneThree] = useState(board[1][3])

    const [twoZero, setTwoZero] = useState(board[2][0])
    const [twoOne, setTwoOne] = useState(board[2][1])
    const [twoTwo, setTwoTwo] = useState(board[2][2])
    const [twoThree, setTwoThree] = useState(board[2][3])

    const [threeZero, setThreeZero] = useState(board[3][0])
    const [threeOne, setThreeOne] = useState(board[3][1])
    const [threeTwo, setThreeTwo] = useState(board[3][2])
    const [threeThree, setThreeThree] = useState(board[3][3])

    
    const final = [
        [zeroZero,zeroOne,zeroTwo,zeroThree],
        [oneZero,oneOne,oneTwo,oneThree],
        [twoZero,twoOne,twoTwo,twoThree],
        [threeZero,threeOne,threeTwo,threeThree]
    ]

    const setBoard=()=>{
        let boxOne={}
        let boxTwo = {}
        let boxThree = {}
        let boxFour = {}
        let col1Obj={}
        let col2Obj={}
        let col3Obj={}
        let col4Obj={}
        for(let i = 0;i<final[0].length;i++){
            if(final[0][i]in boxOne){
                if(i===1){
                    setZeroOne('')
                }
                if(i===2){
                    setZeroTwo('')
                }
                if(i===3){
                    setZeroThree('')
                }
            }
            else{
                boxOne[final[0][i]]=1
            }
        }
        for(let i = 0;i<final[1].length;i++){
            if(final[1][i]in boxTwo){
                if(i===1){
                    setOneOne('')
                }
                if(i===2){
                    setOneTwo('')
                }
                if(i===3){
                    setOneThree('')
                }
            }
            else{
                boxTwo[final[1][i]]=1
            }
        }
        for(let i = 0;i<final[2].length;i++){
            if(final[2][i]in boxThree){
                if(i===1){
                    setTwoOne('')
                }
                if(i===2){
                    setTwoTwo('')
                }
                if(i===3){
                    setTwoThree('')
                }
            }
            else{
                boxThree[final[2][i]]=1
            }
        }
        for(let i = 0;i<final[3].length;i++){
            if(final[3][i]in boxFour){
                if(i===1){
                    setThreeOne('')
                }
                if(i===2){
                    setThreeTwo('')
                }
                if(i===3){
                    setThreeThree('')
                }
            }
            else{
                boxFour[final[3][i]]=1
            }
        }



        //columns reset

        for(let i = 0;i<col1.length;i++){
            if(col1[i] in col1Obj){
                if(i===1){
                    setZeroTwo('')
                }
                if(i===2){
                    setTwoZero('')
                }
                if(i===3){
                    setTwoTwo('')
                }
            }
            else{
                col1Obj[col1[i]]=1
            }
        }

        for(let i = 0;i<col2.length;i++){
            if(col2[i] in col2Obj){
                if(i===1){
                    setZeroThree('')
                }
                if(i===2){
                    setTwoOne('')
                }
                if(i===3){
                    setTwoThree('')
                }
            }
            else{
                col2Obj[col2[i]]=1
            }
        }

        for(let i = 0;i<col3.length;i++){
            if(col3[i] in col3Obj){
                if(i===1){
                    setOneTwo('')
                }
                if(i===2){
                    setThreeZero('')
                }
                if(i===3){
                    setThreeTwo('')
                }
            }
            else{
                col3Obj[col3[i]]=1
            }
        }


        for(let i = 0;i<col4.length;i++){
            if(col4[i] in col4Obj){
                if(i===1){
                    setOneThree('')
                }
                if(i===2){
                    setThreeOne('')
                }
                if(i===3){
                    setThreeThree('')
                }
            }
            else{
                col4Obj[col4[i]]=1
            }
        }
    }
    //all of them
    let col1 = [zeroZero,zeroTwo,twoZero,twoTwo]
    let col2 = [zeroOne,zeroThree,twoOne,twoThree]
    let col3=[oneZero,oneTwo,threeZero,threeTwo]
    let col4 = [oneOne,oneThree,threeOne,threeThree]



    const submit =()=>{
        let b0x = {}
        let boxTwo = {}
        let boxThree = {}
        let boxFour = {}
        let errors = 0
        for(let i = 0;i<final[0].length;i++){
            if(final[0][i]in b0x){
                errors++
                if(final[0][i] === zeroOne){
                    document.getElementById('zeroOne').classList.add('border-red-600')
                    break

                }
                if(final[0][i] === zeroTwo){
                    document.getElementById('zeroTwo').classList.add('border-red-600')
                    break

                }
                if(final[0][i]===zeroThree){
                    document.getElementById('zeroThree').classList.add('border-red-600')
                    break
                }
            }
            else{
                b0x[final[0][i]]=1
                document.getElementById('zeroOne').classList.remove('border-red-600')
                document.getElementById('zeroTwo').classList.remove('border-red-600')
                document.getElementById('zeroThree').classList.remove('border-red-600')
            }
        } 
        for(let i = 0;i<final[1].length;i++){
            if(final[1][i]in boxTwo){
                errors++
                
                if(final[1][i] === oneOne){
                    document.getElementById('oneOne').classList.add('border-red-600')
                    break

                }
                if(final[1][i] === oneTwo){
                    document.getElementById('oneTwo').classList.add('border-red-600')
                    break

                }
                if(final[1][i]===oneThree){
                    document.getElementById('oneThree').classList.add('border-red-600')
                    break
                }
            }
            else{
                boxTwo[final[1][i]]=1
                document.getElementById('oneOne').classList.remove('border-red-600')
                document.getElementById('oneTwo').classList.remove('border-red-600')
                document.getElementById('oneThree').classList.remove('border-red-600')
            }
        } 
        for(let i = 0;i<final[2].length;i++){
            if(final[2][i]in boxThree){
                errors++
                
                if(final[2][i] === twoOne){
                    document.getElementById('twoOne').classList.add('border-red-600')
                    break

                }
                if(final[2][i] === twoTwo){
                    document.getElementById('twoTwo').classList.add('border-red-600')
                    break

                }
                if(final[2][i]===twoThree){
                    document.getElementById('twoThree').classList.add('border-red-600')
                    break
                }
            }
            else{
                boxThree[final[2][i]]=1
                document.getElementById('twoOne').classList.remove('border-red-600')
                document.getElementById('twoTwo').classList.remove('border-red-600')
                document.getElementById('twoThree').classList.remove('border-red-600')
            }
        } 
        for(let i = 0;i<final[3].length;i++){
            
            if(final[3][i]in boxFour){
                errors++
                console.log('error')
                if(final[3][i] === threeOne){
                    document.getElementById('threeOne').classList.add('border-red-600')
                    break
                }
                if(final[3][i] === threeTwo){
                    document.getElementById('threeTwo').classList.add('border-red-600')
                    break

                }
                if(final[3][i]===threeThree){
                    document.getElementById('threeThree').classList.add('border-red-600')
                    break
                }
            }
            else{
                boxFour[final[3][i]]=1
                document.getElementById('threeOne').classList.remove('border-red-600')
                document.getElementById('threeTwo').classList.remove('border-red-600')
                document.getElementById('threeThree').classList.remove('border-red-600')
            }

        } 

        // Rows
        let row1 = [zeroZero,zeroOne,oneZero,oneOne]
        let row1Obj = {}
        let row2 = [zeroTwo,zeroThree,oneTwo,oneThree]
        let row2Obj = {}
        let row3 = [twoZero,twoOne,threeZero,threeOne]
        let row3Obj = {}
        let row4 = [twoTwo,twoThree,threeTwo,threeThree]
        let row4Obj = {}
        //Row1
        for(let i=0;i<row1.length;i++){
            if(row1[i] in row1Obj){
                errors++
                if(i===1){
                    document.getElementById('zeroOne').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('oneZero').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('oneOne').classList.add('border-red-600')
                }
                break
            }
                
            else{
                row1Obj[row1[i]]=1
                if(i===3){
                    document.getElementById('oneZero').classList.remove('border-red-600')
                }
            }
        }

        //row2
        for(let i=0;i<row2.length;i++){
            if(row2[i] in row2Obj){
                errors++
                if(i===1){
                    document.getElementById('zeroThree').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('oneTwo').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('oneThree').classList.add('border-red-600')
                }
                break
            }
                
            else{
                row2Obj[row2[i]]=1
                
            }
        }

        // row 3
        for(let i=0;i<row3.length;i++){
            if(row3[i] in row3Obj){
                errors++
                if(i===1){
                    document.getElementById('twoOne').classList.add('border-red-600')
                    document.getElementById('threeZero').classList.remove('border-red-600')
                }
                else if(i===2){
                    document.getElementById('threeZero').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('threeOne').classList.add('border-red-600')
                }
                break
            }
                
            else{
                row3Obj[row3[i]]=1
                if(i===3){
                    document.getElementById('threeZero').classList.remove('border-red-600')
                }
            }
        }

        //row 4
        for(let i=0;i<row4.length;i++){
            if(row4[i] in row4Obj){
                errors++
                if(i===1){
                    document.getElementById('twoThree').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('threeTwo').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('threeThree').classList.add('border-red-600')
                }
                break
            }
                
            else{
                row4Obj[row4[i]]=1
                
            }
        }
        //colums
        
        let col1Obj = {}
        
        let col2Obj = {}
        
        let col3Obj = {}
        
        let col4Obj = {}


        //col 1
        for(let i=0;i<col1.length;i++){
            if(col1[i] in col1Obj){
                errors++
                if(i===1){
                    document.getElementById('zeroTwo').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('twoZero').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('twoTwo').classList.add('border-red-600')
                }
                break
            }
                
            else{
                col1Obj[col1[i]]=1
                if(i===3){
                    document.getElementById('twoZero').classList.remove('border-red-600')
                }
            }
            
        }

        //col 2
        for(let i=0;i<col2.length;i++){
            if(col2[i] in col2Obj){
                errors++
                if(i===1){
                    document.getElementById('zeroThree').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('twoOne').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('twoThree').classList.add('border-red-600')
                }
                break
            }
                
            else{
                col2Obj[col2[i]]=1
                
            }
            
        }
        //col 3
        for(let i=0;i<col3.length;i++){
            if(col3[i] in col3Obj){
                errors++
                if(i===1){
                    document.getElementById('oneTwo').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('threeZero').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('threeTwo').classList.add('border-red-600')
                }
                break
            }
                
            else{
                col3Obj[col3[i]]=1
                if(i===3){
                    document.getElementById('threeZero').classList.remove('border-red-600')
                }
            }
            
        }

        //col 4
        for(let i=0;i<col4.length;i++){
            if(col4[i] in col4Obj){
                errors++
                if(i===1){
                    document.getElementById('oneThree').classList.add('border-red-600')
                }
                else if(i===2){
                    document.getElementById('threeOne').classList.add('border-red-600')
                }
                else if(i===3){
                    document.getElementById('threeThree').classList.add('border-red-600')
                }
                break
            }
                
            else{
                col4Obj[col4[i]]=1
                
            }
            
        }

        if(errors===0){
            setSuccess(true)
        }
        else{
            setSuccess(false)
        }
    }

  return (
    <div  onClick={()=>addBoxer()} className='flex justify-center flex-col  items-center p-20 '>
        <h1 className='text-5xl font-bold mb-10'>4x4 Sudoku</h1>
        {/* board */}
        
        <div id='boxer'  className='totalBoard border-4'>
        <div className="flex">
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl border-4 font-semibold' type="number" min='1' max='4' name="" id='zeroZero' value={zeroZero} onChange={(e)=>{setZeroZero(e.target.value)}}/></div>
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl border-4 font-semibold' type="number" min='1' max='4' name="" id='zeroOne' value={zeroOne} onChange={(e)=>{setZeroOne(e.target.value)}}/></div>
                    </div>
                    <div className="flex">
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="zeroTwo" value={zeroTwo} onChange={(e)=>{setZeroTwo(e.target.value)}} /></div>
                        <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="zeroThree" value={zeroThree} onChange={(e)=>{setZeroThree(e.target.value)}}/></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="oneZero" value={oneZero} onChange={(e)=>{setOneZero(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="oneOne" value={oneOne} onChange={(e)=>{setOneOne(e.target.value)}}/></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="oneTwo" value={oneTwo} onChange={(e)=>{setOneTwo(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="oneThree" value={oneThree} onChange={(e)=>{setOneThree(e.target.value)}}/></div>
                        </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="twoZero" value={twoZero} onChange={(e)=>{setTwoZero(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="twoOne" value={twoOne} onChange={(e)=>{setTwoOne(e.target.value)}}/></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="twoTwo" value={twoTwo} onChange={(e)=>{setTwoTwo(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="twoThree" value={twoThree} onChange={(e)=>{setTwoThree(e.target.value)}}/></div>
                        </div>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="threeZero" value={threeZero} onChange={(e)=>{setThreeZero(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="threeOne" value={threeOne} onChange={(e)=>{setThreeOne(e.target.value)}}/></div>
                        </div>
                        <div className="flex">
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="threeTwo" value={threeTwo} onChange={(e)=>{setThreeTwo(e.target.value)}}/></div>
                            <div className="h-20 w-20 border-2 border-black"><input className='w-full h-full flex justify-center items-center text-center pl-3 text-5xl font-semibold border-4' type="number" min='1' max='4' name="" id="threeThree" value={threeThree} onChange={(e)=>{setThreeThree(e.target.value)}}/></div>
                        </div>
                </div>
            </div>
        </div>  
        <button onClick={submit} className='h-8 w-20 bg-blue-400 flex items-center justify-center mt-10 border-2 hover:bg-blue-700 border-blue-900 rounded-md cursor-pointer text-white'>Submit</button>
        <button onClick={setBoard}>Set Board</button>
        {success?<p>You Win!</p>:''}
    </div>
  )
}

export default Gameboard