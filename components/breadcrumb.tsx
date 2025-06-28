import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { BreadcrumbJsonLd } from "./json-ld"

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, ...items]} />
      <nav className="flex py-4 px-4 text-sm text-gray-600 md:hidden" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary">
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.path}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {index === items.length - 1 ? (
                  <span className="ml-1 md:ml-2 text-primary font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="ml-1 md:ml-2 text-gray-600 hover:text-primary">
                    {item.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
