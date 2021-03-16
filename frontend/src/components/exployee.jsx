import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postEmployeeData } from "./redux/actionCreator";

const Layout = styled.div`
  margin: 10px;
  padding: 10px;
  items-align: center;
`;

function Addemployee() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      role: role,
      location: location,
      active: status,
    };
    console.log(status);
    console.log(payload);
    dispatch(postEmployeeData(payload));
  };

  return (
    <Layout>
      <form>
        <TextField
          autoComplete="fname"
          name="firstName"
          variant="outlined"
          required
          fullWidth
          id="name"
          label="Name"
          autoFocus
          style={{ margin: "10px", width: "50%" }}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          variant="outlined"
          required
          fullWidth
          id="role"
          label="Role"
          name="role"
          style={{ margin: "10px", width: "50%" }}
          onChange={(e) => setRole(e.target.value)}
        />

        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Location"
          id="location"
          inputProps={{
            'data-testid':'nameInput'
          }}
          style={{ margin: "10px", width: "50%" }}
          onChange={(e) => setLocation(e.target.value)}
        />

        <FormControl
          variant="outlined"
          style={{ margin: "10px", width: "50%" }}
        >
          <InputLabel htmlFor="filled-age-native-simple">Status</InputLabel>
          <Select native onChange={(e) => setStatus(e.target.value)}>
            <option value={"active"}>active</option>
            <option value={"inactive"}>inactive</option>
          </Select>
        </FormControl>

        <Button
          style={{ margin: "10px", width: "50%" }}
          type="submit"
          fullWidth
          data-testid="submit" 
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          ADD EMPLOYEE
        </Button>
      </form>
    </Layout>
  );
}

export default Addemployee;
