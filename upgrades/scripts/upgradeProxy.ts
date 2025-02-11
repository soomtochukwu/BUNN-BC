// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const upgrade = await ethers.getContractFactory("voting_SMC");
  const _upgrade = await upgrades.upgradeProxy("0x0Ae896814f4F8BfB7fa14dBdAdfDC415b758E6E6", upgrade);
  await _upgrade.waitForDeployment();
  await console.log("upgraded", await _upgrade.getAddress());
}

main();