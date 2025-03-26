
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProfileButton } from "@/components/ui/ProfileButton";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed top-0 inset-x-0 h-16 z-50 glass glass-dark border-b backdrop-blur-xl flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-xs text-white">IF</span>
              </div>
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">InsightFinance</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Transactions</Button>
          <Button variant="ghost">Analytics</Button>
          <Button variant="ghost">Goals</Button>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <ProfileButton />
          ) : (
            <AuthModal>
              <Button variant="default">Sign In</Button>
            </AuthModal>
          )}
        </div>
      </div>
    </header>
  );
}
