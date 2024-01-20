import axios, { AxiosResponse } from "axios";

interface RecordData {
  fields: {
    Email: string;
    Date: string;
  }
}

const apiKey = `${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`;
const baseId = 'appDhOtIBBNGwjdnF';
const tableId = 'tblCvoSDrr4FzfGp9';
const endpoint = `https://api.airtable.com/v0/${baseId}/${tableId}`;
const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

export const createEmail = async (data: RecordData): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(endpoint, data, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}