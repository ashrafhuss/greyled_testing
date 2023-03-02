import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(64)
    .matches(/^[A-Za-z]*$/, "First name must be letter")
    .required("Required*"),
  lastName: Yup.string()
    .max(64)
    .matches(/^[A-Za-z]*$/, "Last name must be letter")
    .required("Required*"),
  // phonenumber: Yup.string().min(9).max(13).required("Phone Number in invalid*"),
  email: Yup.string()
    .required("Required*")
    .max(64)
    .email("Oops, that doesn’t look like an email address*")
    .typeError("A number is required"),
  password: Yup.string()
    .required("Required*")
    .min(8, "Your password must be at least 8 characters*")
    .max(64)
    .matches(
      /(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=)/,
      "Your password must contain at least 1 number and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Required*")
    .oneOf([Yup.ref("password"), null], "Your passwords do not match."),
});
export default validationSchema;
