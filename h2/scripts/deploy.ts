import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const bunn = await ethers.deployContract("BUNN", [deployer]);

  await bunn.waitForDeployment();

  console.log("BUNN Contract Deployed at " + bunn.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
