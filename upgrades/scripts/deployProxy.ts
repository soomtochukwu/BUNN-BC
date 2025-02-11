const { ethers, upgrades } = require("hardhat");

async function main() {
  const voting_SMC = await ethers.getContractFactory("voting_SMC");
  const VSMC = await upgrades.deployProxy(voting_SMC, []);
  await VSMC.waitForDeployment();
  console.log("voting_SMC deployed to:", await VSMC.getAddress());
}

main();