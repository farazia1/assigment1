import Link from "next/link";
import React from "react";

export default async function Services() {
  const Placeholder = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await Placeholder.json();
  console.log(res);
  return (
    <div>
      <p>helo world</p>
      <ol className="list-decimal list-inside">
        {res.map((item: any, i: number) => {
          return (
            <li>
              <Link href={`/Services/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
