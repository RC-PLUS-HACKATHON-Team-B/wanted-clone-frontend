import { useState } from "react";

function useIndividualChecks() {
  const [individualChecks, setIndividualChecks] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleIndividualCheck = (e) => {
    const { name, checked } = e.target;
    setIndividualChecks((prevState) => ({ ...prevState, [name]: checked }));
  };

  const updateCheckbox4 = (value) => {
    setIndividualChecks((prevState) => ({ ...prevState, checkbox4: value }));
  };

  const updateAllCheckboxes = (value) => {
    setIndividualChecks({
      checkbox1: value,
      checkbox2: value,
      checkbox3: value,
      checkbox4: value,
    });
  };

  return {
    individualChecks,
    handleIndividualCheck,
    updateCheckbox4,
    updateAllCheckboxes,
  };
}

export default useIndividualChecks;
