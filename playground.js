/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Ritik_1981_NFTS=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT_Ritik_1981 (_name,_age,_city,_bling) {
    const NFT={
        "name":_name,
        "Age":_age,
        "City":_city,
        "bling":_bling
    }
    Ritik_1981_NFTS.push(NFT);
    console.log("Minted: " + _name);  
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs_Ritik  () {

    for(let i=0;i<Ritik_1981_NFTS.length;i++){
        console.log("Name: "+ Ritik_1981_NFTS[i].name);
        console.log("Age: " + Ritik_1981_NFTS[i].Age);
        console.log("City: " + Ritik_1981_NFTS[i].City);
        console.log("Bling: " + Ritik_1981_NFTS[i].bling);
        console.log(""); // Adding a space after each NFT's metadata
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply_Ritik_1981 () {
    console.log("\n"+Ritik_1981_NFTS.length);

}

// call your functions below this line
mintNFT_Ritik_1981 ("Rishu","22","Delhi","Chain");
mintNFT_Ritik_1981 ("Nitin","21","Mumbai","Chain");
mintNFT_Ritik_1981 ("Riya","19","Pune","Earrings");
listNFTs_Ritik ();
getTotalSupply_Ritik_1981 ();