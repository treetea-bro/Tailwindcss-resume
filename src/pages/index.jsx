import Head from "next/head";
import { Resume } from "../components/Resume";

const Page = (props) => {
  return (
    <div className="bg-blue-400 p-8">
      <div className="p-12 bg-white">
        <Head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
        </Head>
        <Resume />
      </div>
    </div>
  );
};

export default Page;
