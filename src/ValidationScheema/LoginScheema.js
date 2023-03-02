import * as Yup from "yup";

const loginSchema = Yup.object({
    email: Yup.string()
      .required("Required*")
      .max(64)
      .email("Oops, that doesn’t look like an email address*")
      .typeError("A number is required"),
    password: Yup.string()
      .required("Required*")
      .min(8, "Password must be a least 8 character"),
  });
  export default loginSchema;