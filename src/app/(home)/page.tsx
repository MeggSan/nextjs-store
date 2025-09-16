// import { Suspense } from "react";
// import { Hero } from "app/components/home/Hero";
// import { Description } from "app/components/home/Description";
import { MainProducts } from "app/components/home/MainProducts";
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

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
