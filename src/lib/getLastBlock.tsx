import axios from "axios";

export const getLastBlock = async () => {
  const rn = Math.floor(Date.now() / 1000);
  
  try {
    const url = `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${rn}&closest=before&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
    const result = await axios.get(url, {
      headers: {
        accept: 'application/json',
      }
    });
    return result.data.result;
  } catch (error) {
    console.log(error);
  }
}