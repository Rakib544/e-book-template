import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="relative text-center text-sm text-slate-600">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
