import React from 'react'
import styled from 'styled-components'

import AboutSection from '../components/AboutSection'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Blockquote from '../components/Blockquote'

const GradientTitle = styled.span`
  display: block;
  background: linear-gradient(#387cc6, #c23ffd);
  background-clip: text;
  -webkit-background-clip: text; /* stylelint-disable-line */
  -webkit-text-fill-color: transparent;
`

const About = () => (
  <Layout>
    <SEO
      title="About me"
      description="Learn more about me. What I do, what I know, who are my clients"
    />
    <div className="font-sans bg-white flex flex-col min-h-screen w-full">
      <div className="px-4 md:px-0 bg-gray-200 md:bg-white">
        <div className="bg-gray-200 md:overflow-hidden">
          <div className="px-4 md:pt-16">
            <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
              <h1 className="font-light text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                <GradientTitle>
                  My name is Kevin Legrand. I{`'`}m a french front-end developer
                </GradientTitle>
              </h1>

              <div
                className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-56 -mr-48"
                style={{
                  animationDuration: '6s',
                  animationName: 'float',
                  animationDelay: '200ms',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                }}
              ></div>
              <div
                className="hidden md:block h-5 w-5 rounded-full bg-pink-500 absolute top-0 right-0 -mr-24 mt-24"
                style={{
                  animationDuration: '5s',
                  animationName: 'float',
                  animationDelay: '600ms',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                }}
              ></div>
            </div>
          </div>

          <svg
            className="fill-current bg-gray-200 text-white hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fillOpacity="1"
              d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-lg relative z-20 md:-mt-360 rounded-md md:rounded-20 pt-4 md:pt-8">
          <div
            className="h-20 w-20 rounded-full bg-pink-500 absolute top-0 left-0 -ml-10 -mt-10 hidden md:block"
            style={{
              zIndex: '-1',
              animationDuration: '6s',
              animationName: 'float',
              animationDelay: '1000ms',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          ></div>

          <div
            className="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12 hidden md:block"
            style={{
              zIndex: '-1',
              animationDuration: '5s',
              animationName: 'float',
              animationDelay: '600ms',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          ></div>

          <div className="flex flex-col md:text-md font-normal mb-16">
            <AboutSection>
              <GradientTitle className="font-light text-xl md:text-3xl">
                What I do
              </GradientTitle>
              <Blockquote
                author="Confucius"
                quote="I hear and I forget. I see and I remember. I do and I understand."
              ></Blockquote>
              <p className="mb-4">
                Most of my time I am building websites for our clients or for
                me.
              </p>

              <p className="mb-4">
                I work in collaboration with project managers and sometimes help
                them defining cost, scope and complexity of the project.
              </p>

              <p className="mb-4">
                In my spare time I{`'`}m doing some R{`&`}D to try new
                technologies.
              </p>
            </AboutSection>

            <AboutSection>
              <GradientTitle className="font-light text-xl md:text-3xl">
                What I learn(ed)
              </GradientTitle>
              <Blockquote
                author="Benjamin Franklin"
                quote="Tell me and I forget. Teach me and I remember. Involve me and I learn."
              ></Blockquote>
              <p className="mb-4">
                <strong className="text-grad1">Known</strong>: HTML5, CSS3,
                SCSS, Laravel, Tailwindcss, Bootstrap, WordPress, WooCommerce,
                GIT, SSH, Bash, JavaScript, React, Adobe Photoshop, Adobe
                Illustrator, Adobe Lightroom, Adobe After Effect, Cinema 4D
              </p>

              <p className="mb-4">
                <strong className="text-grad2">Improving</strong>: ECMAScript
                6/7, Gatsby, Chat bots, Vue.js, Laravel Livewire, Alpine.js
              </p>
            </AboutSection>

            <AboutSection isLastSection={true}>
              <GradientTitle className="font-light text-xl md:text-3xl">
                Who are my clients
              </GradientTitle>
              <Blockquote
                author="Frank Lloyd Wright"
                quote="A doctor can bury his mistakes but an architect can only advise his clients to plant vines."
              ></Blockquote>
              <p className="mb-4">
                Dodie, Otako, Écoute Prolongée, FNAQPA, Éclat de Verre,
                Fél&apos;Ain, Darty, Charal, Hépar, Les Portes du Soleil, April,
                Naos, Les Echos SA (Groupe Les Échos-Le Parisien)
              </p>
            </AboutSection>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
