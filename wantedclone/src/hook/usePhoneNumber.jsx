import { useState, useEffect } from "react";

function usePhoneNumberValidation() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  useEffect(() => {
    setIsPhoneNumberValid(phoneNumber.length == 11);
  }, [phoneNumber]);

  return [phoneNumber, setPhoneNumber, isPhoneNumberValid];
}

export default usePhoneNumberValidation;
