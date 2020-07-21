import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaCodepen, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Header = ({ siteTitle }) => {
  return (
    <header className="bg-gray-800 py-2 px-4 z-50" role="banner">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <Link
              className="logo mr-3 md:mr-4 text-logo2 hover:text-logo1 transition-colors duration-300 ease-in-out"
              to="/"
              aria-label={`${siteTitle} (Go to Homepage)`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 489 241"
                width="60"
                height="30"
                className="fill-current"
              >
                <path
                  fill="#ed6eae"
                  d="M114.3 169.5l-61.6 62.8s-19 13.2-39.2-.3c0 0-9-3.3-13.5-24V40S4.2 8.2 33.3 8.2c0 0 32.6.6 32.6 31.7l.1 84.2.7-.7.4-.4"
                />
                <path
                  fill="currentColor"
                  d="M66 124.1L167.3 21.3S192 .1 213.5 23.9c0 0 19.1 25.2.4 43.3l-52.5 53.1-.6 1.3v1.4l58.9 59.1s14.3 21.7-6.2 42.2c0 0-23.2 21-44.2 0l-55.1-55-17.2-16L66 124zm209-98.6L233.2 206s-4.4 26 21 33c0 0 29.1 7.7 36-23.5l42.3-180.2s4.8-25.6-18.3-32c0 0-31.7-10.2-39.2 22.2zm209.8 85.8l-93.5-93.1S367.8 6 353 20.8c0 0-17.7 15.5-9.2 41.6l55 56.8s2.4 1.5.4 3.5l-53.5 54s-14.1 22.6 5.3 42c0 0 23.5 17.8 41.3 2.3l76.4-74.2 16.1-16.5s7.5-8.5 0-19z"
                />
              </svg>
            </Link>

            <Link
              to="/about/"
              className="text-white text-base md:text-xl transition-colors duration-300 ease-in-out hover:text-logo1 border-b-2 border-transparent hover:border-logo1 leading-tight"
            >
              About me
            </Link>
          </div>

          {/* Social Media icons */}
          <div className="flex items-center">
            <a
              className="flex-0-auto inline-block self-center leading-none text-white mr-4 text-base md:text-xl hover:text-logo1 transition-colors duration-300 ease-in-out"
              href="https://www.twitter.com/manoz"
              rel="noreferrer noopener"
              title="Follow me on Twitter"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="flex-0-auto inline-block self-center leading-none text-white mr-4 text-base md:text-xl hover:text-logo1 transition-colors duration-300 ease-in-out"
              href="https://github.com/manoz"
              rel="noreferrer noopener"
              title="Fork me on Github"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="flex-0-auto inline-block self-center leading-none text-white mr-4 text-base md:text-xl hover:text-logo1 transition-colors duration-300 ease-in-out"
              href="https://www.instagram.com/manoz_/"
              rel="noreferrer noopener"
              title="Like me on Instagram"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="flex-0-auto inline-block self-center leading-none text-white text-base md:text-xl hover:text-logo1 transition-colors duration-300 ease-in-out"
              href="http://codepen.io/Manoz/"
              rel="noreferrer noopener"
              title="Play with me on Codepen"
              target="_blank"
            >
              <FaCodepen />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
