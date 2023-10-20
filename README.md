# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

### Project Name - YerniToken with Lion

## Project for Blochain

# What is a Non-Fungible Token?##

Fungible means to be the same or interchangeable. For example, Ethereum tokens, all the members of a particular token class, have the same value. The same can be said of Cardano tokens. Fungible tokens are interchangeable 1:1.

With this in mind, NFTs are unique; each one is different. Every single token has unique characteristics and values. The types of things that can be NFTs are collectible cards, artworks, airplane tickets, etc. They are all clearly distinguishable from one another and are not interchangeable. Think of Non-Fungible Tokens (NFTs) as rare collectibles; each has unique characteristics, unusual attributes, and most times, its metadata.

# What is ERC-721?

ERC stands for Ethereum Request for Comment, and 721 is the proposal identifier number. ERCs are application-level standards in the Ethereum ecosystem, they can be a smart contract standard for tokens such as ERC-20, the author of an ERC is responsible for building consensus with the Ethereum community, and once the proposal is reviewed and approved by the community, it becomes a standard. You can track the recent ERC proposal here. ERC-721 was created to propose the functionality to track and transfer NFTs within smart contracts.

ERC-721 is an open standard that describes how to build Non-Fungible tokens on EVM (Ethereum Virtual Machine) compatible blockchains; it is a standard interface for Non-Fungible tokens; it has a set of rules which make it easy to work with NFTs. NFTs are not only of ERC-721 type; they can also be ERC-1155 tokens.
Explanation of the code above:

- Line 1: Specifying SPDX license type as MIT. This indicates that the code is licensed under the MIT License, which is a permissive open-source license allowing the code to be used, modified, and distributed with very few restrictions.

- Line 2: Declaring the Solidity version as ^0.8.20. This indicates that the code is written using Solidity version 0.8.20 or a compatible version.

- Line 4-7: Importing necessary contracts from the OpenZeppelin library.

ERC721.sol: This contract is imported from the OpenZeppelin library and represents the basic implementation of the ERC721 standard. ERC721 is the standard for non-fungible tokens (NFTs).

- ERC721URIStorage.sol: This contract extends ERC721 and adds functionality for storing and managing metadata URIs associated with NFTs. Metadata URIs typically point to additional information about the NFT.

- ERC721Burnable.sol: This contract also extends ERC721 and adds the ability to burn (destroy) NFTs. It provides a function for permanently removing NFTs from circulation, and only the owner can invoke it.

- Ownable.sol: This contract is used for access control. It allows you to specify an owner who has special privileges within the contract. The owner can perform certain actions that other users cannot.
