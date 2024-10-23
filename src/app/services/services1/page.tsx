import React from "react";
export default async function Services1({ params}: {params:{ hero1: String }}) {
   
    const hero1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.hero1}`);
    const res = await hero1.json();
    console.log(res);
  return (
    <div>
      <h1>here is the product</h1>
      <p>{res.id}</p>
      <p>{res.title}</p>
      <p>{res.body}</p>
    </div>
  )
}