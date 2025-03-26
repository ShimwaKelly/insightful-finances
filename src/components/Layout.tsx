
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isAuthenticated ? 'pt-24 pb-16' : 'pt-16 pb-16'}`}>
        {children}
      </main>
    </div>
  );
}
