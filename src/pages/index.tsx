import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Databin.store</title>
        <meta name="description" content="The first DLaaS provider. Subscribe to mirror your data on Chia's Datalayer platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Databin <span className="text-[hsl(280,100%,70%)]">.</span> Store
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">

            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Step 1</h3>
              <p className="text-lg">Sign up for an account.</p>
              <button className="bg-[hsl(280,100%,70%)] px-4 py-2 rounded-full mt-auto font-bold text-slate-100">Sign Up</button>
            </div>

            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-8 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Step 2</h3>
              <p className="text-lg">Submit a mirror request by entering your mirror ID and a name.</p>
            </div>

            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-8 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Step 3</h3>
              <p className="text-lg">View & pay your invoice by sending the requested XCH to the address provided.</p>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
