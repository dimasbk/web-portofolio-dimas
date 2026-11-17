import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Swiss Minimalist 12-column grid footer with contact endpoints and system metadata.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-swiss-grey/30 bg-swiss-beige/35">
      <div className="swiss-container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-swiss-taupe">
                PORTFOLIO // INDEX
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-swiss-black">
                {profile.name}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-swiss-grey">
                Full Stack Developer focused on enterprise banking platforms,
                high-reliability backend APIs, and relational database systems.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-swiss-grey">
              <MapPin className="h-3.5 w-3.5 text-swiss-taupe" strokeWidth={1.75} />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-swiss-grey">
              NAVIGATION
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-swiss-grey">
              DIRECT CHANNELS
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 font-mono text-xs text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  <Mail className="h-3.5 w-3.5 text-swiss-grey group-hover:text-swiss-taupe" strokeWidth={1.75} />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  <Phone className="h-3.5 w-3.5 text-swiss-grey group-hover:text-swiss-taupe" strokeWidth={1.75} />
                  <span>{profile.phone}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-swiss-grey group-hover:text-swiss-taupe" strokeWidth={1.75} />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs text-swiss-black transition-colors duration-200 hover:text-swiss-taupe"
                >
                  <span>{profile.linkedin}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-swiss-grey group-hover:text-swiss-taupe" strokeWidth={1.75} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-swiss-grey/30 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-swiss-grey">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-swiss-grey">
            BUILT WITH NEXT.JS // TYPESCRIPT // TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
