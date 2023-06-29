import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-12 bg-bgDark">
      <Navbar />
      {children}
    </main>
  );
}
