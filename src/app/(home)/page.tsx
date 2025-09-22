// import { Suspense } from "react";
// import { Hero } from "app/components/home/Hero";
// import { Description } from "app/components/home/Description";
import { MainProducts } from "components/home/MainProducts";
import { Metadata } from "next";
// import { Loader } from "app/components/shared/Loader/Loader";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <Description />
//       <Suspense fallback={<Loader />}>
//         <MainProducts />
//       </Suspense>
//     </main>
//   );
// }

export const metadata: Metadata = {
  title: "✨ Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["e-commerce", "future", "world", "technology"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
