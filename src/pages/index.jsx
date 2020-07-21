import React from 'react'
import { gsap } from 'gsap'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SocialStuff from '../components/SocialStuff'

import profilPictureSrc from '../images/me.jpg'

class IndexPage extends React.Component {
  componentDidMount() {
    const tl = gsap.timeline()

    tl.from('.js-stageFrom', {
      duration: 1.5,
      scale: 0.7,
      autoAlpha: 0,
    }).from(
      '.js-picture, .js-bar',
      {
        duration: 2.5,
        x: -150,
      },
      '<'
    )

    tl.play()
  }

  render() {
    return (
      <Layout>
        <SEO />
        <div className="max-w-60 px-4 mx-auto">
          <div className="js-stageFrom relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-card">
            <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-card">
              <div className="absolute inset-0 w-full h-full js-picture">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transform transition-transform duration-1500 linear"
                  src={profilPictureSrc}
                  alt="Picture of me"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div className="p-6 md:pr-24 md:pl-16 md:py-12 text-gray-700">
                <p className="mb-4 text-md">
                  I{`'`}m working in a web agency in{' '}
                  <span className="text-logo1">Lyon, France</span>. Most of my
                  time I{`'`}m building websites for our clients.
                </p>

                <p className="mb-4 text-md">
                  I{`'`}m working mainly with{' '}
                  <span className="text-logo1">Laravel</span> and its ecosystem
                  (Nova, Mix, Valet, Tinker and more recently Livewire). I{`'`}m
                  a front-end developer so{' '}
                  <span className="text-logo1">Tailwindcss</span>,{' '}
                  <span className="text-logo1">Vue.js</span>,{' '}
                  <span className="text-logo1">SASS</span> and{' '}
                  <span className="text-logo1">JavaScript</span> are my best
                  friends.
                </p>

                {/* <Link
                className="flex items-center mt-3 text-grad1 hover:text-grad2 transition-colors duration-300 ease-in-out"
                to="/work"
              >
                <span className="underline">Stuff I{`'`}ve done with things</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </Link> */}
              </div>
              <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12 js-bar"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
            </div>
          </div>

          <SocialStuff />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
