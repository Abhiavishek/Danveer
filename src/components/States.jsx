import React, { useState } from "react";
import { state } from "./state";
const State = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (event) => {
    const selectedStateCode = event.target.value;
    const selectedStateObj = state.find((state) => state.code === selectedStateCode);

    setSelectedState(selectedStateCode);
    setDistricts(selectedStateObj ? selectedStateObj.districts : []);
  };

  return (
    <div>
      <label>
        Select your State:
        <select onChange={handleStateChange} value={selectedState}>
          <option value="" disabled>Select a state</option>
          {state.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
      </label>

     (
        <div>
          <label>
            Select your District:
            <select>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </label>
        </div>
      )
    </div>
  );
};

export default State;
