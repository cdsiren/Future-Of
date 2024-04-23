import { useState } from 'react';
import { useScreenSize } from '../../lib/contexts/useScreenSizeContext';
import { supabase } from '../../lib/db/supabase';

const EmailCapture = (props: any) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { type } = useScreenSize();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(''); // Clear error when user modifies the email
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      // Replace 'emails' with your actual table name
      const { error } = await supabase
        .from('Emails')
        .upsert([ 
          { email: email }
        ], {
          onConflict: 'email'
        });
  
      if (error) throw error;
      setSuccess(true);
      setEmail('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while recording the email.');
    }
  };
  

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return <>
    <div className={props.className}>
      <input 
        className={`${type === 'mobile' ? 'custom-highlight2' : 'custom-highlight1'} rounded-full w-full py-1 px-2 font-light bg-transparent`}
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder='Enter your email...'
        onKeyDown={handleKeyDown}
        aria-describedby="emailHelp"
      />
      {props.showSubmit && <button className='bg-black text-white py-1 px-5 cursor-pointer hover:opacity-80' onClick={handleSubmit}>Submit</button>}
    </div>
    {props.prompt && 
    <div className="flex justify-center">
      <button onClick={() => handleSubmit()} className={`${type === 'mobile' && 'text-white'} text-xs font-bold p-1 text-center w-fit`}>Join the waitlist.</button>
    </div>}
    {success || error ? <>
      <div id="emailHelp" className="text-green-500 text-xs text-center">{success && 'Successfully recorded'}</div>
      <div id="emailHelp" className="text-orange-500 text-xs text-center">{error && 'Email already submitted.'}</div>
      </> :
      <div className='h-2'></div>
    }
  </>
}
export default EmailCapture;