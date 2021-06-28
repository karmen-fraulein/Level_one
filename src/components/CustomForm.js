import React, { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import TextError from "./TextError";
import * as Yup from "yup";


function CustomForm() {
  const [status, setStatus] = useState()
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    comments: "",
    address: ""
  };
  const onSubmit = (values) => {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(
        {
          email: values.email,
          username: values.name,
          password: values.password,
          comments: values.comments,
          address: values.address,
          name: {
            firstname: values.name,
            lastname: values.surname
          }
          
        }
        
      )
      
    })
    
      .then(res => {
        if(res.status){
          setStatus(res.status)
        }
        return res.json()
      })
      .then(json => console.log(json))
      
    // const response = {}
    // response.status = ok
    // if (ok) {
    //   actions.setStatus({ success: 'Email sent !' })
    //   actions.resetForm()
    // }
    // console.log('ok')
    // console.log('response: ', response)
  }

  



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

  if(status ===  201){
    return (
      <div className="submit-div">
        <h1>Submittsed!</h1>
      </div>
    )
  }
  else if (status === 404){
    return (
      <div className="submit-div wrong">
      <h1>Something is wrong</h1>
    </div>
      )
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={true}
    >

      <Form>
        <div className="form-control error first-field">
          <Field type="text" id="name" name="name" placeholder="First name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control ">
          <Field
            type="text"
            id="surname"
            name="surname"
            placeholder="Last name"
          />
          <ErrorMessage name="surname" component={TextError} />
        </div>

        <div className="form-control ">
          <Field type="email" id="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control ">
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component={TextError} />
        </div>
        <div className="form-control textarea ">
          <Field as="textarea"

            id="comments"
            name="comments"
            placeholder="Comments"
          />

        </div>
        <div className="form-control ">
          <Field
            name="address"

          >
            {(props) => {
              const { field, form, meta } = props
              return (<div>
                <input type="text" id="address" placeholder="Address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>

              )
            }}
          </Field>

        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default CustomForm;
