import * as Yup from "yup";
const classSchema = Yup.object({
  courseNumber: Yup.string().max(64).required("Required*"),
  /* courseNumber: Yup.string()
    .max(8, "The course number maximum 8 characters")
    .required("Required"), */
  courseName: Yup.string().max(64).required("Required*"),
  //start_date: Yup.date("dd/mm/yyyy"),
  /*     .max(new Date(), intl.formatMessage({ id: "start_date.error.max" }))
    .required(), */
});
export default classSchema;
