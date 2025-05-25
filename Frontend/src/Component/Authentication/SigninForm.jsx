import { Grid, Button, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/Auth/Action';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, jwt } = useSelector(store => store.auth);
  
  useEffect(() => {
    console.log("JWT in SigninForm:", jwt);
    console.log("localStorage JWT:", localStorage.getItem("jwt"));
    if (jwt) {
      console.log("Navigating to homepage...");
      navigate("/");
    }
  }, [jwt, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitting form with values:", values);
      dispatch(loginUser(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="large"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            size="large"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        {error && (
          <Grid item xs={12}>
            <p className="text-red-500 text-sm">{error}</p>
          </Grid>
        )}
        <Grid className="mt-20" item xs={12}>
          <Button
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SigninForm;
