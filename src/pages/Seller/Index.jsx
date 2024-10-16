import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Head from "next/head";
import Dashboard from "@/components/SellerLayoutComponent/Dashboard";
import LayoutNoSearch from "@/components/LayoutComponent/LayoutNoSearch";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const role = Cookies.get("role");
    const user_id = Cookies.get("user_id");

    if (!role || role !== "seller") {
      router.push("/login");
    }
  }, []);

  return (
    <LayoutNoSearch className="dashboard-home bg-white">
      <Dashboard />
    </LayoutNoSearch>
  );
};

export default index;

//   return (
//     <div>
//       <Head>
//         <title>Seller Dashboard</title>
//         <meta name="description" content="Seller dashboard page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex justify-center items-center min-h-screen bg-gray-100">
//         <Dashboard />
//       </main>
//     </div>
//   );
// }
