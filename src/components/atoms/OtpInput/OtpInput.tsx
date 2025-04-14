import React, { useState, useRef } from 'react';

interface OTPInputProps {
  length?: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6 }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1 && inputs.current[index + 1]) {
        inputs.current[index + 1]?.focus();
      }
    }

    if (value === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          style={{
            width: '40px',
            height: '40px',
            margin: '16px 5px',
            textAlign: 'center',
            fontSize: '18px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
