import React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from "@material-tailwind/react";

const Memos = ({state}) => {
    const[memos, setMemos] = useState([]);
    const {contract} = state;
    useEffect(()=>{
        const memosMessage = async()=>{
            const memos = await contract.getMemos();  
            setMemos(memos);
        }
        contract && memosMessage();
    },[contract])

  return (
  <>
    {
        memos.map((memo)=>{
            const classes = "p-4" ;
            return(<>
                <tr key={Math.random()}> 
                {/* ethers.utils.keccak256(memo.timestamp) */}
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {memo.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {memo.sender}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {memo.message}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                 {new Date(memo.timestamp * 1000).toLocaleString()}
                  </Typography>
                </td>
                </tr>
                </>
            )
        })
    }
  </>
  )
}

export default Memos