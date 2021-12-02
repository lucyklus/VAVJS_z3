import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
toast.configure()

const Order = () =>{  
  var orderInfo = {}

  async function postOrder(orderInfo){
    const url = "http://localhost:8080/newOrder";
    const options = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(orderInfo)
    };
    await fetch(url, options)
      .then(function(response) {
        console.log(response.status); 
        if(response.status === 400){
          toast.error("Zadaný e-mail už existuje")
        }
        else{
          toast.success("Objednávka odoslaná")
          window.location.href = "/thanks"
        }
      })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      street: '',
      number: '',
      city: '',
      postcode: '',    
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Nesprávny tvar e-mailu').required('Povinné pole'),
      name: Yup.string()
        .required('Povinné pole'),
      street: Yup.string()
        .required('Povinné pole'),
      number: Yup.string()
        .required('Povinné pole'),
      city: Yup.string()
        .required('Povinné pole'),
      postcode: Yup.string()
        .required('Povinné pole')
    }),
    onSubmit: values => {
      orderInfo.customer = values
      orderInfo.products = global.cart.map(product=>{
        return {productId: product.id, quantity: product.details.qnt}
      })
      console.log(orderInfo)
      postOrder(orderInfo)
    },
  });
  return (
    <div>
      <Title name="Osobné údaje"/>
      <div className="form-row center">
      <form onSubmit={formik.handleSubmit}>
          <div className="form-group col-md-6">
            <label htmlFor="email">E-mail: </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                size="30"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="name">Meno a priezvisko: </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                size="30"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="street">Ulica: </label>
              <input
                id="street"
                name="street"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.street}
                size="30"
              />
              {formik.touched.street && formik.errors.street ? (
                <div className="error">{formik.errors.street}</div>
              ) : null}
            </div>

          <div className="form-group col-md-6">
            <label htmlFor="number">Číslo: </label>
              <input
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                size="30"
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="error">{formik.errors.number}</div>
              ) : null}
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="city">Mesto: </label>
              <input
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                size="30"
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="error">{formik.errors.city}</div>
              ) : null} 
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="postcode">PSČ: </label>
              <input
                id="postcode"
                name="postcode"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postcode}
                size="30"
              />
              {formik.touched.postcode && formik.errors.postcode ? (
                <div className="error">{formik.errors.postcode}</div>
              ) : null}
            </div>

            <button 
              type="submit" 
              className="btn btn-outline-success mx-5 my-3"
            >
              Odoslať
            </button>
        </form>
      </div>
    </div>
    
    
  );
};

export default Order;