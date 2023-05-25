const hre = require("hardhat");

async function main() {
  const Bmc = await hre.ethers.getContractFactory("Bmc");
  const contract = await Bmc.deploy();
  await contract.deployed();
  //creating an instance
  console.log("Address of deployed contract:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
