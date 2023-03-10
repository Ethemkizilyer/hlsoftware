import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postApp } from "../features/userSlice";

const FormSchema = Yup.object().shape({
  Name: Yup.string().required("Ad Soyad gerekli"),
  PhoneNumber: Yup.string()
    .matches(
      /^[1-9][0-9]{9}$/,
      "Telefon numaranızı 0 ile yazmayın,10 rakamdan oluşmalı"
    )
    .required("Telefon numarası giriniz"),
  Email: Yup.string().email("Geçersiz e-posta").required("Email gerekli"),
  Message: Yup.string()
    .max(256, "Mesaj 256 karakterden kısa olmalıdır")
    .required("Mesaj gereklidir"),
});

export const Contact = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        Name: "",
        PhoneNumber: "",
        Email: "",
        Message: "",
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        dispatch(postApp(values));
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-[600px] mb-[168px] mt-16">
          <Form>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="form-group mb-6">
                <Field
                  name="Name"
                  as={TextField}
                  label="Ad-Soyad"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="Name"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="form-group mb-6">
                <Field
                  name="PhoneNumber"
                  as={TextField}
                  label="Telefon Numarası"
                  variant="outlined"
                  fullWidth
                  placeholder="5XXXXXXXX"
                  margin="normal"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <ErrorMessage
                  name="PhoneNumber"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <Field
                name="Email"
                as={TextField}
                label="E-posta"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              <ErrorMessage
                name="Email"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div className="form-group mb-6">
              <Field
                name="Message"
                as={TextField}
                label="Mesaj"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              />
              <ErrorMessage
                name="Message"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="
      w-full
      px-6
      py-2.5
      bg-red-100
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-500 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out "
              variant="contained"
            >
              GÖNDER
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
