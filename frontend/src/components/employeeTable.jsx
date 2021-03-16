import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeesData,
  deleteEmployee,
  editEmployeeData,
} from "./redux/actionCreator";
import Pagination from "@material-ui/lab/Pagination";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  delete: {
    marginLeft: 10,
  },
  edit: {
    marginRight: 10,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: "relative",
    right: theme.spacing(1),
    left: theme.spacing(1),
    marginLeft: "90%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  pagining: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginLeft: "35%",
      marginBottom: "2em",
    },
  },
}));

export const EmployeesTable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [name, setname] = useState("");

  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.data);
  const studentLength = useSelector((state) => state.studentsLength);
  useEffect(() => {
    dispatch(getEmployeesData());
  }, []);
  //  console.log(employees)
  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = (item) => {
    //  console.log(item)
    setOpen(true);
    setname(item.name);
    setRole(item.role);
    setLocation(item.location);
    setStatus(item.status);
    setId(item._id);
    //console.log(id)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(id)
    const payload = {
      name: name,
      role: role,
      location: location,
      active: status,
    };
    // console.log(payload);
    //console.log(id);
    dispatch(editEmployeeData(id, payload));
    setOpen(false);
  };

  const handleDelete = (id) => {
    //console.log(id);
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Active</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.role}</StyledTableCell>
                <StyledTableCell align="right">{item.location}</StyledTableCell>
                <StyledTableCell align="right">{item.active}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    
                    onClick={(e) => handleEdit(item)}
                 
                    className={classes.edit}
                  >
                    <EditIcon />
                  </Button>

                  <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <div className={classes.head}>
                          <IconButton
                            aria-label="close"
                            className={classes.closeButton}
                            onClick={handleClose}
                          >
                            <CloseIcon />
                          </IconButton>
                        </div>
                        <form className={classes.form} noValidate>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="role"
                                label="Role"
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Location"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl
                                variant="outlined"
                                fullWidth
                                className={classes.formControl}
                              >
                                <InputLabel htmlFor="filled-age-native-simple">
                                  Status
                                </InputLabel>
                                <Select
                                  native
                                  value="Status"
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option value={"active"}>active</option>
                                  <option value={"inactive"}>inactive</option>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
                        </form>
                      </div>
                    </Fade>
                  </Modal>

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.delete}
                    onClick={(e) => handleDelete(item._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default EmployeesTable;
