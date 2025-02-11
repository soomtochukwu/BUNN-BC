// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const arg1 = "string";

module.exports = buildModule("LockModule", (m) => {
  const arg1 = m.getParameter("arg1", arg1);

  const contract = m.contract("BUNN", []);

  return { contract };
});

/*

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Name = "EduChain";
const Symbol = "EC";

module.exports = buildModule("LockModule", (m) => {
  const name = m.getParameter("name", Name);
  const symbol = m.getParameter("symbol", Symbol);

  const lock = m.contract("SchoolSystem", [name, symbol]);

  return { lock };
});
 */
