import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be less than 50 characters")
    .required("Number is required"),
});

function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({
      id: nanoid(),
      ...values,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "fit-content",
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <Field
            type="text"
            id="name"
            name="name"
            style={{
              width: "250px",
              padding: "5px",
              border: "1px solid black",
            }}
          />
          <ErrorMessage name="name" component="div" />
        </div>

        <div style={{ marginTop: "15px" }}>
          <label htmlFor="number">Number</label>
          <br />
          <Field
            type="tel"
            id="number"
            name="number"
            style={{
              width: "250px",
              padding: "5px",
              border: "1px solid black",
            }}
          />
          <ErrorMessage name="number" component="div" />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "5px 15px",
            backgroundColor: "#f0f0f0",
            border: "1px solid black",
          }}
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;