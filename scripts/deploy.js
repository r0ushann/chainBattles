const main = async () => {
  try{
    const nftContractFactory = await hre.ethers.getContractFactory("chainBattles");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed to :" , nftContract.address);
    process.exit(0);
  }
  catch(error){

  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
