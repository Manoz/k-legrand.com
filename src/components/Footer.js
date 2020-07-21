import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
  const dt = new Date()
  const year = dt.getFullYear()

  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between text-sm my-4 mx-auto container px-4"
      role="contentinfo"
    >
      <div className="flex items-center flex-wrap justify-center">
        Copyright {`©`} {year} Kevin Legrand
        <span className="flex items-center">
          <svg
            className="mx-2"
            height="16"
            width="16"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path d="M49.109 13.836H34.903v.005H10.964v9.216c0 9.909 8.032 17.941 17.941 17.941 7.284 0 13.541-4.349 16.352-10.585h3.853c4.57 0 8.289-3.718 8.289-8.289s-3.719-8.288-8.29-8.288zm0 12.215h-2.533c.164-.976.27-1.971.27-2.994v-4.859h2.263c2.165 0 3.926 1.761 3.926 3.926s-1.761 3.927-3.926 3.927zM10.055 48.675c.502.823 1.69 1.49 2.654 1.49h32.392c.964 0 2.152-.667 2.654-1.49l3.454-5.659H6.602l3.453 5.659z" />
          </svg>
          Fueled with{' '}
          <Link
            title="Caffeine"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-1 text-grad1 hover:text-grad2 transition-colors duration-300 ease-in-out"
            to="https://en.wikipedia.org/wiki/Caffeine"
          >
            C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
          </Link>
        </span>
      </div>

      <div className="flex items-center">
        Built with ❤️ using
        <Link
          className="ml-1"
          rel="noopener noreferrer"
          title="Gatsbyjs"
          target="_blank"
          to="https://www.gatsbyjs.org/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 28 28"
          >
            <circle cx="14" cy="14" r="14" fill="#639" />
            <path
              fill="#fff"
              d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
            />
          </svg>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
