import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const About = () => (
  <Layout>
    <SEO title="404: Not found" />
    {/* <div className="max-w-60 px-4 mx-auto text-gray-700 font-light flex flex-col items-center">
      <h1 className="text-3xl md:text-4 font-medium">About me</h1>

      <p className="mb-4 text-xl font-normal">Coming soon...</p>
    </div> */}

    <div className="font-sans bg-white flex flex-col min-h-screen w-full">
      <div>
        <div className="bg-gray-200 md:overflow-hidden">
          <div className="px-4 py-16">
            <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
              <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                A simple and smart tool that will help grow your business
              </h1>

              <p className="text-gray-600 md:text-xl md:px-18">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
              </p>

              <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>

              <div className="hidden md:block h-5 w-5 rounded-full bg-pink-500 absolute top-0 right-0 -mr-40 mt-32"></div>
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

        <div className="max-w-4xl mx-auto bg-white shadow-lg relative z-20 px-10 -mt-320 rounded-20">
          <div
            className="h-20 w-20 rounded-full bg-pink-500 absolute top-0 left-0 -ml-10 -mt-10"
            style={{ zIndex: '-1' }}
          ></div>

          <div
            className="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"
            style={{ zIndex: '-1' }}
          ></div>

          <div className="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
          <div className="flex flex-col text-md">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              sem vestibulum, feugiat lectus vel, ultricies sem. Proin gravida
              mollis nisl ac molestie. Praesent ut velit auctor, varius mauris
              a, pretium urna. Fusce sodales tellus ultricies nunc ultrices, sit
              amet dignissim felis ullamcorper. Mauris volutpat neque
              ullamcorper, ornare enim a, egestas erat. Curabitur cursus mattis
              lacus. Etiam pulvinar, nisi sit amet maximus tincidunt, turpis
              libero laoreet elit, in fringilla nulla magna commodo purus. Donec
              ante leo, auctor vel libero ac, porta imperdiet mauris. Sed
              dapibus, leo vel feugiat volutpat, purus nisi iaculis tortor, et
              lacinia massa eros non erat. Pellentesque id augue sagittis,
              vulputate justo eget, luctus lectus. Vivamus faucibus rutrum arcu
              vitae condimentum. Sed feugiat mi vel lacus pharetra interdum.
              Fusce a ipsum egestas, vulputate augue ornare, ultrices lectus.
              Sed in orci aliquam, aliquam tellus et, lobortis purus. Curabitur
              tincidunt cursus est eu eleifend. Vestibulum a dolor venenatis,
              sagittis ante semper, posuere nisi.
            </p>

            <p className="mb-4">
              Vivamus sed metus at lorem congue auctor in eu lorem. Mauris
              ligula justo, hendrerit non dictum in, ullamcorper eget odio. Duis
              luctus, ipsum sed fermentum tincidunt, orci tellus viverra neque,
              a tincidunt est purus eu nulla. Maecenas at metus ut nisl iaculis
              tincidunt. Vestibulum eget urna a lacus tincidunt malesuada
              tincidunt quis ligula. Morbi sit amet interdum nulla, vitae congue
              leo. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam erat volutpat. Integer
              ut fringilla justo. Pellentesque sed scelerisque libero. Aliquam
              lectus nisl, elementum in libero vel, tempus consectetur augue.
              Phasellus pharetra nisl sed porta iaculis. Sed interdum pulvinar
              turpis nec porta. Proin ullamcorper risus sit amet eleifend
              convallis.
            </p>

            <p className="mb-4">
              In pulvinar mi vitae fringilla vulputate. Aenean felis purus,
              molestie quis leo nec, tincidunt faucibus odio. Aliquam efficitur
              dolor id mi rhoncus, at cursus ipsum bibendum. Quisque massa urna,
              congue eu rhoncus quis, efficitur facilisis ex. Etiam ut tempus
              magna. Suspendisse pellentesque orci ut leo sagittis, nec
              sollicitudin mauris condimentum. Pellentesque viverra metus odio,
              eu sagittis ex commodo id. Nam condimentum blandit diam, eget
              commodo urna aliquet quis. Morbi varius ligula risus, quis
              suscipit dui porttitor vel. Phasellus mauris tellus, imperdiet non
              ex eu, feugiat euismod ex. Donec at dapibus ligula. Curabitur sit
              amet nunc eu felis fermentum semper. Sed nec vestibulum nunc.
              Aenean bibendum, mauris eget semper hendrerit, lorem tellus
              venenatis ante, a sagittis justo ex sed lectus. In volutpat
              dapibus ligula, eget tristique neque rutrum ut. Fusce mollis
              turpis non efficitur efficitur.
            </p>

            <p className="mb-4">
              Sed sit amet metus massa. Cras in ligula vehicula, rutrum lorem
              sit amet, rutrum mauris. Aenean vel velit a purus lacinia tempor.
              Nullam congue rutrum tortor, et fringilla sapien ultrices eu.
              Integer sagittis leo nec eros rutrum, eget scelerisque ipsum
              fringilla. Nam lacinia, lectus at lobortis porttitor, tortor velit
              iaculis dui, in rhoncus erat nulla sit amet est. Vestibulum dictum
              vestibulum tellus eget auctor. Nunc efficitur sem non neque
              porttitor mattis. Maecenas suscipit nisl sit amet metus sodales
              ultrices. In id lorem euismod, semper velit a, ornare orci. Morbi
              luctus quis lorem nec fermentum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Fusce dignissim, enim sit amet
              imperdiet vehicula, lectus metus iaculis nunc, et lobortis urna
              risus non odio. Mauris tincidunt velit in elit molestie tempus.
            </p>

            <p className="mb-4">
              Nunc massa felis, sagittis id augue quis, facilisis finibus magna.
              Proin gravida auctor massa, a accumsan felis faucibus vel. Sed ex
              ligula, hendrerit venenatis luctus quis, fermentum ac libero.
              Nullam vitae velit nec magna consectetur efficitur eu eu sem. Ut
              lacinia, justo non imperdiet eleifend, metus neque consectetur
              massa, id scelerisque neque metus sed metus. Nulla gravida, nisi
              in cursus varius, elit ligula tristique erat, sed viverra nisl
              mauris ac quam. Ut pellentesque iaculis venenatis. Nunc laoreet
              odio quis risus ornare dignissim. Phasellus interdum varius eros
              sed varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
