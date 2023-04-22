import { useState } from 'react';
import { createEmail } from '../lib/createEmail';

const EmailCapture = (props:any) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };  

  const handleSubmit = async () => {
    const newRecord = {
      fields: {
        Email: email,
        Date: new Date().toLocaleDateString()
      }
    };
    try {
      await createEmail(newRecord);
      setEmail('successfully recorded');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return <div className={props.className}>
    <input className='rounded-full py-1 px-2 text-orange-500 font-light' type="text" id="email" value={email} onChange={handleEmailChange} placeholder='Enter your email...' onKeyDown={e => handleKeyDown(e)} />
    {props.showSubmit && <button className='bg-black text-white py-1 px-5 cursor-pointer hover:opacity-80' onClick={handleSubmit}>Submit</button>}
    </div>
}

export default EmailCapture;