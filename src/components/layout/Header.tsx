import { Sun, Moon, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import CleanMateLogo from "@/components/icons/logo";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const isLaunched = import.meta.env.VITE_LAUNCHED_APP === "true";

  const handleGetStarted = () => {
    window.open(
      isLaunched
        ? import.meta.env.VITE_APP_LINK
        : import.meta.env.VITE_WAITLIST_LINK,
      "_blank"
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <CleanMateLogo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="/#impact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impact
            </a>
            <a
              href="/#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Stories
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              onClick={handleGetStarted}
              className="gap-2 text-sm sm:text-base px-3 sm:px-4"
            >
              <Rocket className="w-4 h-4 hidden sm:block" />
              {isLaunched ? "Launch App" : "Join Waitlist"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
