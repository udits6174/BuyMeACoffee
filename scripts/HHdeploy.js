const hre = require("hardhat");
const { ethers } = require("hardhat");
async function getBalances(address){
  const balBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balBigInt);
}
async function logBalances(addresses){
  let counter = 0;
  for(const address of addresses){
    console.log(`Address ${counter++} balance:`, await getBalances(address));
  }
}
async function logMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const name = memo.name;
    const sender = memo.sender;
    const message = memo.message;
    console.log(`At time ${new Date(timestamp*1000).toLocale()}, from ${sender} with name ${name} sent a message : ${message}`)
  }
}
async function main() {
  const [owner, sender1, sender2, sender3] = await hre.ethers.getSigners();
  const Bmc = await hre.ethers.getContractFactory("Bmc");
  const contract = await Bmc.deploy();
  await contract.deployed();
  //creating an instance
  console.log("Address of contract:", (await contract).address);
  const addresses = [owner.address, sender1.address, sender2.address, sender3.address, contract.address];
  console.log("Before buying coffee");
  await logBalances(addresses);

  const amount = {value: hre.ethers.utils.parseEther("1")};
  await contract.connect(sender1).buycoffee("Udit", "query1", amount);
  await contract.connect(sender2).buycoffee("shitij", "query2", amount);
  await contract.connect(sender3).buycoffee("Ujwall", "query3", amount);
  console.log("After buying coffee");
  await logBalances(addresses);

  const memos = await contract.getMemos();
  logMemos(memos);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
