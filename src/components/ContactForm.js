import React from "react";
import { useState } from "react";
import { sendContactForm } from "@/lib/contact-api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const ErrorBox = () => {
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">required</p>
  );
};

const validateEmail = (email) => {
  if(!email || email.length < 1) return false;

  const res = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if(res === null) return false
    return true;
};

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const { values, isLoading, error } = state;

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await sendContactForm(values);
    } catch (error) {
      
    }
  };


  const buttonClassName =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center";

  const inputClassName =
    "bg-slate-800 border border-slate-700 text-white text-sm rounded-md focus:bg-slate-900 block w-full p-2.5";
  
  const buttonDisable = !values.name || !values.email || !values.subject || !values.message

  return (
    <form className="mx-auto w-10/12 lg:w-2/3" >
      <div className="mb-5">
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          placeholder={"Your Name"}
          value={values.name}
          className={inputClassName}
          onChange={handleChange}
          onBlur={onBlur}
          required
        />
        {touched["name"] && !values.name ? <ErrorBox></ErrorBox> : ""}
      </div>
      <div className="mb-5">
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"your@email.com"}
          value={values.email}
          className={inputClassName}
          onChange={handleChange}
          onBlur={onBlur}
          required
        />
        {touched["email"] && values.email && !validateEmail(values.email) ? (
          <ErrorBox></ErrorBox>
        ) : ""}
      </div>
      <div className="mb-5">
        <input
          type={"subject"}
          id={"subject"}
          name={"subject"}
          placeholder={"Subject"}
          value={values.subject}
          className={inputClassName}
          onChange={handleChange}
          onBlur={onBlur}
          required
        />
        {touched["subject"] && !values.subject ? <ErrorBox></ErrorBox> : ""}
      </div>
      <div className="mb-5">
        <textarea
          type={"text"}
          id={"message"}
          name={"message"}
          placeholder={"Message.."}
          value={values.message}
          className={inputClassName}
          onChange={handleChange}
          onBlur={onBlur}
          required
        />
        {touched["message"] && !values.message ? <ErrorBox></ErrorBox> : ""}
      </div>
      <button
        className={buttonDisable ? "cursor-not-allowed " + buttonClassName : buttonClassName}
        disabled={buttonDisable}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
