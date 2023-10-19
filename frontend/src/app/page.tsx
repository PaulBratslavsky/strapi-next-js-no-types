// import our types
import type { APIResponseCollection, APIResponseData } from "@/types/types";

import qs from "qs";
const query = qs.stringify({ populate: "*" });

async function getData() {
  const res = await fetch("http://127.0.0.1:1337/api/posts?" + query);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  // typescript will infer the type of `data` as `APIResponseCollection<"api::post.post">`
  const data = (await getData()) as APIResponseCollection<"api::post.post">;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.data.map((post: APIResponseData<"api::post.post">) => {
          return <Card key={post.id} data={post} />;
        })}
      </div>
    </main>
  );
}

// typescript will infer the type of `data` as `APIResponseData<"api::post.post">`
function Card({ data }: { data: APIResponseData<"api::post.post"> }) {
  console.log(data, "############# STRAPI CARD DATA #############");

  const { title, description } = data.attributes;
  return (
    <a
      href="https://strapi.io"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
}
