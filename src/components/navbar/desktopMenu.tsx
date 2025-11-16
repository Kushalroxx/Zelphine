import Link from "next/link";

export default function DesktopMenu({ navItems, pathname }:{
    navItems: { href: string; label: string }[];
    pathname: string;
}) {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`hover:text-primary/80 transition font-semibold ${pathname.startsWith(item.href) ? "text-primary underline underline-offset-3" : "text-foreground/70"}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
