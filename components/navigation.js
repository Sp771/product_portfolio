import Container from './container'

const link = 'px-3 py-2 text-white/85 hover:text-white transition-colors duration-150'

export default function Navigation() {
  return (
    <header className="bg-ink">
      <Container>
        <nav className="flex flex-wrap items-center justify-between gap-y-2 py-4" aria-label="Main">
          <a href="/" className="font-display text-2xl font-extrabold text-white tracking-tight">
            Sydney Pittman
          </a>
          <ul className="flex flex-wrap items-center gap-1 text-base font-medium">
            <li>
              <a
                href="/prototypes"
                className="ml-1 inline-block rounded-full bg-lime px-4 py-2 font-bold text-ink hover:bg-white transition-colors duration-150"
              >
                AI Prototypes
              </a>
            </li>
            <li><a href="/projects" className={link}>Projects</a></li>
            <li><a href="/about" className={link}>About</a></li>
            <li><a href="https://www.linkedin.com/in/sydneympittman/" className={link}>LinkedIn</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
