// @ts-ignore
import { ethers } from "hardhat";

async function main() {
  const BUNN = await ethers.deployContract("BUNN");

  await BUNN.waitForDeployment();

  console.log("BUNN Contract Deployed at " + BUNN.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
