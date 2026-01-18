import { Heart, Award } from "lucide-react";
import CleanMateLogoInvariant from "../icons/logo-invariant";
import { addReferrerToUrl } from "@/lib/utils";

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Instagram icon component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// YouTube icon component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Telegram icon component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="sm:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <CleanMateLogoInvariant />
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering communities across the Globe to organize impacts,
              build networks, and earn rewards for environmental impact.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-foreground" />
              <span>Built with love for the planet</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground/80">Platform</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="/#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#impact"
                  className="hover:text-foreground transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="hover:text-foreground transition-colors"
                >
                  Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground/80">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="/help"
                  className="hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/cleanmate_community"
                  className="hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href={addReferrerToUrl(import.meta.env.VITE_BLOG_LINK)}
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 lg:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2026 Cleanmate. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={addReferrerToUrl("https://x.com/cleanmatedao")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href={addReferrerToUrl("https://instagram.com/cleanmatedao")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={addReferrerToUrl("https://tiktok.com/@cleanmatedao")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={addReferrerToUrl("https://www.youtube.com/@cleanmatedao")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={addReferrerToUrl("https://t.me/cleanmate_community")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-foreground" />
              <span className="text-sm text-muted-foreground">
                Powered by VeChain & B3TR
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
