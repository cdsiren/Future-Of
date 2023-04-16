import axios from "axios";

export const getLastRelease = async () => {
  try {
    const url = `https://hq.decent.xyz/api/1.0/contracts/1%2C10%2C137%2C42161?contractTypes=&limit=1&page=0&sort=-1`
    const { data: contractData } = await axios.get(url, {
      headers: {
        accept: 'application/json',
        'x-api-key': `${process.env.NEXT_PUBLIC_DECENT_API_KEY}`
      }
    });
    return contractData.data[0];
  } catch (error) {
    console.log(error);
  }
}