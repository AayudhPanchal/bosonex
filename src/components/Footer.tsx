import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="opacity-65" />
      <footer className="w-4/5 mx-auto py-12">
        <div className="container flex flex-wrap justify-between">

          {sections.map((section, index) => (
            <div key={index} className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 className="font-medium text-base mb-3">{section.title}</h2>
              <nav className="list-none mb-6 flex flex-col space-y-3 text-sm">
                {section.links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

        </div>

        <hr className="opacity-65 my-8" />
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()}, All Rights Reserved</p>
          <p>
            <Link href="#">
              <span className="hover:underline cursor-pointer">Learn More</span>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

const sections = [
  {
    title: "About",
    links: [
      { label: "Company News", href: "#" },
      { label: "Meet the Team", href: "#" },
      { label: "Press Releases", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company News", href: "#" },
      { label: "Meet the Team", href: "#" },
      { label: "Press Releases", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Press Releases", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
];