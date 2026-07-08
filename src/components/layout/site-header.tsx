"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, services, siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/layout/logo";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => {
              if (item.href === "/hizmetler") {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent text-sm",
                        isActivePath(pathname, item.href)
                          ? "text-primary"
                          : "text-foreground/80"
                      )}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[560px] grid-cols-2 gap-1 p-3">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/hizmetler/${service.slug}`}
                                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                              >
                                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                  <service.icon className="size-4.5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-foreground">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-muted-foreground">
                                    {service.description}
                                  </span>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-border p-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/hizmetler"
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-primary hover:bg-muted"
                          >
                            Tüm hizmetleri incele
                            <ArrowRight className="size-4" />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "h-9 rounded-lg px-2.5 py-1.5 text-sm font-medium",
                      isActivePath(pathname, item.href)
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {siteConfig.phone}
          </a>
          <Button asChild className="rounded-full px-5">
            <Link href="/iletisim">Teklif Al</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Menüyü aç">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted",
                    isActivePath(pathname, item.href)
                      ? "bg-muted text-primary"
                      : "text-foreground/85"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-border px-4 pt-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <Phone className="size-4 text-primary" />
                {siteConfig.phone}
              </a>
              <Button asChild className="w-full rounded-full">
                <Link href="/iletisim" onClick={() => setOpen(false)}>
                  Teklif Al
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
