import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Navigation() {
  return (
    <>
      <Container>
          {
            <>
                <ul className="flex justify-end">
                <li>
                        <a
                        href={`/home`}
                        className="p-4 block text-[#f13c1f] transition duration-200 hover:scale-150 hover:font-bold duration-200 transition-transform"
                        >
                        Home
                        </a>
                    </li>
                    <li>
                        <a
                        href={`/projects`}
                        className="p-4 block text-[#f13c1f] transition duration-200 hover:scale-150 hover:font-bold duration-200 transition-transform"
                        >
                        Projects
                        </a>
                    </li>
                    <li>
                        <a
                        href={`/about`}
                        className="p-4 block text-[#f13c1f] transition duration-200 hover:scale-150 hover:font-bold duration-200 transition-transform"
                        >
                        About
                        </a>
                    </li>
                    <li>
                        <a
                        href={`https://www.linkedin.com/in/sydneympittman/`}
                        className="p-4 block text-[#f13c1f] transition duration-200 hover:scale-150 hover:font-bold duration-200 transition-transform"
                        >
                        LinkedIn
                        </a>
                    </li>
                </ul>
            </>
          }
      </Container>
    </>
  )
}
