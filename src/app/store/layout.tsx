export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Categories navigation</nav>
      {children}
    </main>
  );
}
