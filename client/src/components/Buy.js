import { ethers } from 'ethers';
import {Input,Button} from "@material-tailwind/react";


const Buy = ({ state }) => {
    const buyCoffee = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector('#name').value;
        const msg = document.querySelector('#msg').value;
        const amount = { value: ethers.utils.parseEther('0.01') };
        const transaction = await contract.buycoffee(name, msg, amount);
        await transaction.wait();
        console.log("Txn done");
    }
    return (
      <form onSubmit={buyCoffee} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input id='name' size="lg" label="Enter your name" />
            <Input id='msg' size="lg" label="Enter your message" />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
    );
}

export default Buy