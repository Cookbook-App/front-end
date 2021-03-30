import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const initialError = {
    fisrtName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const initialDisabled = true;

  const [credentials, setCredentials] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState(initialError);
  const [disabled, setDisabled] = useState(initialDisabled);

  let formSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: yup.string().trim().email("Invalid email").required("Required"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    rememberMe: yup.string(),
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((error) =>
        setErrors({ ...errors, [e.target.name]: error.errors[0] })
      );
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Call API TO SUBMIT DATA
    axios
      .post("", {
        firstName: e.target.value,
        lastName: e.target.value,
        email: e.target.value,
        password: e.target.value,
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);

        history.push("/");
        history.go();
      })
      .catch((error) => {
        console.log(error, "Houston we have a problem");
      });
  };
  useEffect(() => {
    formSchema.isValid(credentials).then((valid) => setDisabled(!valid));
  }, [credentials]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <div>{errors.firstName}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              <div>{errors.lastName}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <div>{errors.email}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div>{errors.password}</div>
            </Grid>
          </Grid>
          <Button
            disabled={disabled}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {/* used react router Link as a with material ui Link */}
              <Link component={RouterLink} to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
