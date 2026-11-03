import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-ink">
      <Container>
        <div className="py-12">
          <div className="flex justify-center items-center">
            <a className="mx-4"
              href="mailto:sydney.m.pittman@gmail.com">
              <img alt="email icon" src={"/icons/mail-fill.svg"} height={40} width={40} className="invert opacity-80 hover:opacity-100 transition-opacity" />
              <span className="invisible">Email</span>
            </a>
            <a className="mx-4" href="https://www.linkedin.com/in/sydneympittman/">
                <img alt="linkedin logo" src={"/icons/linkedin-box-fill.svg"} height={40} width={40} className="invert opacity-80 hover:opacity-100 transition-opacity" />
                <span className="invisible">LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
