import Image from "next/image";
import Link from "next/link";
import { IconBrandDiscord } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="relative">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Discord Link */}
          <div className="hidden md:block">
            <Link
              href="https://discord.gg/SxQ7rdzPHp"
              className="inline-flex items-center gap-2 px-4 py-2 text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              <IconBrandDiscord size={20} />
              <span className="uppercase font-bold tracking-wide">Our Server</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.webp"
                  alt="TarkovBOT Logo"
                  width={40}
                  height={40}
                />
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  BigDATA.caiths
                </h1>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="header-link">
              Home
            </Link>
            <Link href="/goonstracker" className="header-link">
              GoonsTracker
            </Link>
            <div className="relative group">
              <span className="header-link cursor-pointer flex items-center">
                Tarkov Bots <span className="ml-1">▼</span>
              </span>
              <div className="absolute hidden group-hover:block z-50 mt-2 bg-card shadow-lg border border-border min-w-[150px]">
                <div className="flex flex-col py-2">
                  <Link href="/bot/twitch" className="px-4 py-2 hover:bg-accent/50">
                    Twitch Bot
                  </Link>
                  <Link href="/bot/discord" className="px-4 py-2 hover:bg-accent/50">
                    Discord Bot
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="header-link cursor-pointer flex items-center">
                Tools <span className="ml-1">▼</span>
              </span>
              <div className="absolute hidden group-hover:block z-50 mt-2 bg-card shadow-lg border border-border min-w-[150px]">
                <div className="flex flex-col py-2">
                  <Link href="/tools/overlays" className="px-4 py-2 hover:bg-accent/50">
                    EFT Overlays
                  </Link>
                  <Link href="/tools/bantracker" className="px-4 py-2 hover:bg-accent/50">
                    Ban Tracker
                  </Link>
                  <Link href="/tools/market" className="px-4 py-2 hover:bg-accent/50">
                    Flea Market
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Login/Language */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-foreground/30 rounded-md px-2 py-1">
              <span className="text-sm uppercase">EN</span>
            </div>
            <Link href="/login" className="flex items-center gap-2 px-4 py-2 hover:text-primary transition-colors">
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
