import { useFormik } from "formik";
import { addFoodItemFormValidation } from "../../validators/FormValidation.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import "./styles/AdminAddProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// const addFoodItemFormInitialValues = {
//   product_name: "",
//   product_description: "",
//   product_price: "",
//   product_category: "",
//   product_type: "",
//   product_image_1: "",
//   // product_image_2: "",
// };

export function AdminAddProducts() {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_category, setProductCategory] = useState("");
  const [product_type, setProductType] = useState("");
  const [product_image_1, setProductImage1] = useState("");
  // const [product_image_2, setProductImage2] = useState("");
  const navigator = useNavigate();
  // const {
  //   values,
  //   errors,
  //   touched,
  //   isValid,
  //   handleBlur,
  //   handleChange,
  //   handleSubmit,
  // } = useFormik({
  //   initialValues: addFoodItemFormInitialValues,
  //   validationSchema: addFoodItemFormValidation,
  //   async onSubmit(values, action) {
  //     console.log(values);
  //     const response = await fetch("http://localhost:5000/api/addProduct", {
  //       method: "POST",
  //       body: JSON.stringify({ ...values }),
  //       credentials: "include",
  //     });
  //   },
  // });
  const add_product = async (e) => {
    const data = new FormData();
    data.set("product_name", product_name);
    data.set("product_description", product_description);
    data.set("product_category", product_category);
    data.set("product_type", product_type);
    data.set("product_price", product_price);
    data.set("product_image_1", product_image_1[0]);
    // data.set("product_image_2", product_image_2[0]);
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/addProduct", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.status === 200) {
      navigator("/");
    }
  };
  return (
    <>
      <div className={"container-fluid p-2"}>
        <h2 className={"text-center fs-2 fw-bold"}>Add New Food Item</h2>
        <div className={"container"}>
          <form className={"add-product-form"} onSubmit={add_product}>
            <div className="mb-3">
              <label htmlFor="product_name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                name="product_name"
                className="form-control"
                id="product_name"
                value={product_name}
                onChange={(event) => setProductName(event.target.value)}
                placeholder="Enter product name"
              />
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_name && touched.product_name ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_name}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className="mb-3">
              <label htmlFor="product_description" className="form-label">
                Product Description
              </label>
              <textarea
                name="product_description"
                value={product_description}
                className="form-control"
                id="product_description"
                onChange={(event) => {
                  setProductDescription(event.target.value);
                }}
              ></textarea>
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_description && touched.product_description ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_description}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className="mb-3">
              <label htmlFor="product_price" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                name="product_price"
                value={product_price}
                onChange={(event) => {
                  setProductPrice(event.target.value);
                }}
                className="form-control"
                id="product_price"
                placeholder="Enter product price"
              />
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_price && touched.product_price ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_price}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className="mb-3">
              <label htmlFor="product_category" className="form-label">
                Product Category
              </label>
              <input
                type="text"
                name="product_category"
                className="form-control"
                value={product_category}
                onChange={(event) => {
                  setProductCategory(event.target.value);
                }}
                id="product_category"
                placeholder="Chines, Japanese, Bangladeshi, Thai or Fast Food "
              />
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_category && touched.product_category ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_category}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className={"mb-3"}>
              <label htmlFor={"product_type"} className={"form-label"}>
                Product Type
              </label>
              <input
                type={"text"}
                name={"product_type"}
                value={product_type}
                className={"form-control"}
                id={"product_type"}
                onChange={(event) => {
                  setProductType(event.target.value);
                }}
                placeholder={"Main, Starter, Dessert or Beverage"}
              />
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_type && touched.product_type ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_type}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className={"mb-3"}>
              <label htmlFor={"product_image_1"} className={"form-label"}>
                Product Image 1
              </label>
              <input
                type="file"
                name="product_image_1"
                className={"form-control"}
                id="product_image_1"
                onChange={(event) => {
                  setProductImage1(event.target.files);
                }}
                // value={product_image_1}
              />
            </div>
            {/*error*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_image_1 && touched.product_image_1 ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_image_1}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            {/*<div className={"mb-3"}>*/}
            {/*  <label htmlFor={"product_image_2"} className={"form-label"}>*/}
            {/*    Product Image 2*/}
            {/*  </label>*/}
            {/*  <input*/}
            {/*    type={"file"}*/}
            {/*    name={"product_image_2"}*/}
            {/*    className={"form-control"}*/}
            {/*    // value={product_image_2}*/}
            {/*    onChange={(event) => {*/}
            {/*      setProductImage2(event.target.files);*/}
            {/*    }}*/}
            {/*    id={"product_image_2"}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className={"input-errors"}>*/}
            {/*  {errors.product_image_2 && touched.product_image_2 ? (*/}
            {/*    <p>*/}
            {/*      <FontAwesomeIcon*/}
            {/*        icon="fa-solid fa-circle-exclamation"*/}
            {/*        className={"mx-1 fa-fade"}*/}
            {/*      />*/}
            {/*      {errors.product_image_2}*/}
            {/*    </p>*/}
            {/*  ) : null}*/}
            {/*</div>*/}
            <div className={"mb-3"}>
              <input
                type={"submit"}
                className={"form-control"}
                value={"Add Product"}
              />
              {/*{isValid ? (*/}
              {/*    <input*/}
              {/*        type={"submit"}*/}
              {/*        className={"form-control"}*/}
              {/*        value={"Add Product"}*/}
              {/*    />*/}
              {/*) : (*/}
              {/*    <input*/}
              {/*        type={"submit"}*/}
              {/*        className={"form-control"}*/}
              {/*        value={"Not Valid "}*/}
              {/*    />*/}
              {/*)}*/}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
