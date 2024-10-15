// src/app/login.js
import React from "react";
import Header from "../components/header";
import Form from "../components/form"
import { metadata } from "../layout";
const Login = () => {
  return (
    <div className="bg-gray-200 min-h-screen"> 
      <Header/>
      <Form/>
    </div>
  );
};

export default Login;
