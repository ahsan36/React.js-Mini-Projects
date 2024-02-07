import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [otp, setOtp] = useState("");
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(59);

  const resendOTP = () => {
    console.log("Success");
  }

  useEffect(() => {
    const interval = setInterval(() => {

      // Decrease second if greater than 0
      if(second > 0) {
        setSecond(second - 1);
      }

      // Stop the countdown when both minute and second are 0
      if(second === 0) {
        if(minute === 0) {
          clearInterval(interval);
        }else {
          // Decrease minute if greater than 0
          setSecond(59);
          setMinute(minute - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [second]);
  
  return (
    <div className='container'>
      <div className='card'>
        <h4>Verify OTP</h4>

        <input 
          placeholder='Enter OTP' 
          className='inp' 
          value={otp} 
          onChange={({target}) => {
            setOtp(target.value);
          }} />

        <div className='time-otp'>

          <p>Time Remaining: {" "}
              <span style={{fontWeight: "600"}}>
                {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
              </span>
          </p>

          {/* re-generate OTP */}
          <button disabled={second > 0 || minute > 0}
            style={{color: second > 0 || minute > 0 ? "#DFE3ED" : "#FF5630", }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>

        </div>

        {/* Submit BUtton */}
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  )
}

export default App

