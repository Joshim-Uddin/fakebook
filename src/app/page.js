'use client'
import { useContext } from "react";
import { fakebookContext } from "./contextApi";
import Login from "./login/page";

export default function Home() {
  const {user} = useContext(fakebookContext)
  console.log(user)
  return (
  
    <Login />
  
  );
}
