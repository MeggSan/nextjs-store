// import styles from "./Hero.module.css";
import styles from "./Hero.module.sass";

// export const Hero = () => {
//   return (
//     <section>
//       <h1 className="text-[7rem] mt-12 mb-4 bg-gradientPrimary bg-clip-text text-transparent text-center tracking-[0.05em]">
//         Hero
//       </h1>
//       <h2 className="text-[2rem] mb-12 text-text text-center">
//         Empowering Your Tomorrow, Today!
//       </h2>
//     </section>
//   );
// };

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <h1>Hero</h1>
      <h2>Empowering Your Tomorrow, Today!</h2>
    </section>
  );
};
