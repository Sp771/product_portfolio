import { useRouter } from 'next/router'
import Container from './container'

const ITEMS = [
  { href: '/prototypes', label: 'AI Prototypes', kind: 'primary' },
  { href: '/projects', label: 'Projects', match: (p) => p === '/projects' || p.startsWith('/posts') },
  { href: '/resume', label: 'Resume', kind: 'outline' },
  { href: '/about', label: 'About', match: (p) => p === '/about' || p === '/pepper' },
  { href: 'https://www.linkedin.com/in/sydneympittman/', label: 'LinkedIn', external: true },
]

function classesFor(item, active) {
  if (item.kind === 'primary') {
    return active
      ? 'rounded-full bg-white text-ink ring-4 ring-cream px-4 py-2 font-bold'
      : 'rounded-full bg-cream text-ink px-4 py-2 font-bold hover:bg-white'
  }
  if (item.kind === 'outline') {
    return active
      ? 'rounded-full bg-white text-ink border-2 border-white px-4 py-1.5 font-bold'
      : 'rounded-full border-2 border-white/70 text-white px-4 py-1.5 font-bold hover:bg-white hover:text-ink'
  }
  return active
    ? 'px-3 py-2 text-white font-bold underline decoration-cream decoration-4 underline-offset-[10px]'
    : 'px-3 py-2 text-white/80 hover:text-white'
}

export default function Navigation() {
  const { pathname } = useRouter()
  return (
    <header className="bg-ink">
      <Container>
        <nav className="flex flex-wrap items-center justify-between gap-y-3 py-4" aria-label="Main">
          <a href="/" aria-current={pathname === '/' ? 'page' : undefined} className="font-display text-2xl font-extrabold text-white tracking-tight">
            Sydney Pittman
          </a>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-base font-medium">
            {ITEMS.map((item) => {
              const active = !item.external && (item.match ? item.match(pathname) : pathname === item.href)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-block transition-colors duration-150 ${classesFor(item, active)}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
