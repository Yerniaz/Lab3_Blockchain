const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YerniToken", function () {
  let MyContract, myContractDeployed, owner, addr1, addr2, addr3, addrs;

  beforeEach(async function () {
    MyContract = await ethers.getContractFactory("YerniToken");
    myContractDeployed = await MyContract.deploy(
      "0x48c9530d4B4157b0d91bF2b9c8777223990eD37F"
    );
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
  });

  describe("Deployment", function () {
    it("should return correct name and symbol", async function () {
      expect(await myContractDeployed.name()).to.equal("YerniToken");
      expect(await myContractDeployed.symbol()).to.equal("YTK");
    });

    it("should return correct owner address", async function () {
      expect(await myContractDeployed.owner()).to.equal(
        "0x48c9530d4B4157b0d91bF2b9c8777223990eD37F"
      );
    });

    it("should implement mint function that increase balance of addr1 to 1", async function () {
      const mintTx = await myContractDeployed
        .connect(addr1)
        .safeMint(addr1.address, "./1.json", { value: "5000000000000000" });
      await mintTx.wait();
      expect(await myContractDeployed.balanceOf(addr1.address)).to.equal(1);
    });
  });
});
