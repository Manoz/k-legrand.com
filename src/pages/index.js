import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SocialStuff from '../components/SocialStuff'
import WordToggler from '../components/WordToggler'

import profilPictureSrc from '../images/me.jpg'

const AnimWrapper = styled.div`
  &:hover {
    img {
      transform: scale(1.1);
    }

    .bg-color {
      opacity: 0.1;
    }
  }
`

class IndexPage extends React.Component {
  componentDidMount() {
    new WordToggler(this.wordEl)
  }

  render() {
    return (
      <Layout>
        <SEO />
        <div className="max-w-60 px-4 mx-auto">
          <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-0 md:min-h-card">
            <AnimWrapper className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-0 md:min-h-card">
              <div className="relative md:absolute inset-0 w-full h-full">
                <img
                  className="relative md:absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-1500 linear"
                  src={profilPictureSrc}
                  alt="Picture of me"
                />
              </div>
              <div
                className="bg-color absolute inset-0 w-full h-full bg-grad2 opacity-35 transition-opacity duration-1500 linear"
                aria-hidden="true"
              ></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                <p className="font-sans text-center font-medium text-3xl">
                  <span
                    // eslint-disable-next-line no-return-assign
                    ref={(element) => (this.wordEl = element)}
                    className="word inline-block"
                  >
                    Hi
                  </span>{' '}
                  <br /> I{`'`}m Kevin Legrand
                </p>
              </div>
            </AnimWrapper>
            <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
              <div className="p-6 md:pr-24 md:pl-16 md:py-8 text-gray-700">
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
              </div>
              <svg
                className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
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
