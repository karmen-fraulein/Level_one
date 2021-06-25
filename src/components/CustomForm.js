import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
// import axios from "axios";

const initialValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  fetch('https://fakestoreapi.com/users', {
    method: "POST",
    body: JSON.stringify(
      {
        email: values.email,
        username: values.name,
        password: values.password,
        name: {
          firstname: values.name,
          lastname: values.surname
        }
      }
    )
  })
    .then(res => res.json())
    .then(json => console.log(json))
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Enter strong password"
    )
    .required("Required"),
});

function CustomForm() {
  // console.log(formik.touched)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      
      <Form>
        <div className="form-control error first-field">
          <Field type="text" id="name" name="name" placeholder="First name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control error">
          <Field
            type="text"
            id="surname"
            name="surname"
            placeholder="Last name"
          />
          <ErrorMessage name="surname" />
        </div>

        <div className="form-control error">
          <Field type="email" id="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control error">
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default CustomForm;
