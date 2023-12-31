import * as yup from "yup";

const emailRegex =
  /^([a-zA-Z0-9_\\.\\-]+)@([a-zA-Z0-9\-\\.]+)\.([a-zA-Z]{2,4})$/;
export const loginFormValidation = yup.object({
  email: yup
    .string()
    .required("Please enter a valid email address")
    .matches(emailRegex, "Your email format is invalid"),
  password: yup
    .string()
    .min(6, "Minimum length is 6")
    .required("Please enter password"),
});

export const registerFormValidation = yup.object({
  full_name: yup
    .string()
    .min(6, "Minimum 6 characters")
    .max(20, "Maximum 20 characters")
    .required("Please enter a name"),
  phone: yup
    .string()
    .min(11)
    .max(11)
    .required("Please enter a valid phone number"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .matches(emailRegex, "Your email format is invalid"),
  password: yup
    .string()
    .min(6, "Minimum length is 6")
    .required("Please enter password"),
  // confirm_password: yup.string().required("Confirm password is required").oneOf([yup.ref("password"),null],"Password does not match")
});

export const addFoodItemFormValidation = yup.object({
  product_name: yup.string().required("Please enter a name"),
  product_description: yup.string().required("Please enter description"),
  product_price: yup.string().required("Please enter a price"),
  product_category: yup.string().required("Please enter category"),
  product_type: yup.string().required("Please enter type"),
  product_image_1: yup.string().required("This field is required"),
  // product_image_2: yup.string().required("This field is required"),
});
