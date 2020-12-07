import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "./Select";

const SelectEmployee = () => {
  const [employeeId, setEmployeeId] = useState("");

  const employees = [
    { id: "employee-100", name: "Jane Doe" },
    { id: "employee-2", name: "Moby Dick" },
    { id: "employee-102", name: "Leroy Syndrome" },
  ];

  const handleChange = (event) => {
    setEmployeeId(event.target.value);
  };

  return (
    <Select value={employeeId} onChange={handleChange}>
      {employees.map((employee) => (
        <MenuItem key={employee.id} value={employee.id}>
          {employee.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectEmployee;
