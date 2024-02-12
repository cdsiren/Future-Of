import axios, { AxiosResponse } from "axios";

interface RecordData {
  fields: {
    Email: string;
    Date: string;
  }
}

const authToken = process.env.NEXT_PUBLIC_AIRTABLE_AUTH_TOKEN;
if (!authToken) {
  console.error("Authentication token is not set in environment variables.");
}

const baseId = 'appLg3jU7UbWwTQc5';
const tableId = 'tblKuDIPXKsVzPjez';
const endpoint = `https://api.airtable.com/v0/${baseId}/${tableId}`;
const headers = {
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};

export const createEmail = async (data: RecordData): Promise<AxiosResponse> => {
  console.log(endpoint)
  try {
    const formattedData = {
      records: [
        {
          fields: data.fields
        }
      ],
      typecast: true
    };

    const response = await axios.post(endpoint, formattedData, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}