import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const A = styled.a`
  transition: opacity 0.2s linear, transform 0.3s linear;

  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }

  &:not(:last-child) {
    margin-right: 15px;
    @media (min-width: 992px) {
      margin-right: 20px;
    }
  }
`

class SocialStuff extends React.Component {
  render() {
    const SocialLink = (props) => (
      <A
        style={{ color: props.color }}
        className="text-3xl"
        rel="noopener noreferrer"
        title={props.thetitle}
        target="_blank"
        href={props.theurl}
      >
        {props.icon}
      </A>
    )

    return (
      <div className="flex flex-col items-center content-center justify-center bg-gray-100 rounded-lg shadow-xl py-6 md:py-10 px-6 mt-12">
        <p className="text-md md:text-xl mb-4">
          In a hurry? Here is some quick links to my social networks:
        </p>
        <div className="flex items-center">
          <SocialLink
            color="#1da1f2"
            thetitle="Follow me on Twitter"
            theurl="https://www.twitter.com/manoz"
            icon={<FaTwitter />}
          />
          <SocialLink
            color="#24292e"
            thetitle="Fork me on Github"
            theurl="https://github.com/manoz"
            icon={<FaGithub />}
          />
          <SocialLink
            color="#c32aa3"
            thetitle="Like me on Instagram"
            theurl="https://www.instagram.com/manoz_/"
            icon={<FaInstagram />}
          />
          <SocialLink
            color="#000"
            thetitle="Play with me on Codepen"
            theurl="http://codepen.io/Manoz/"
            icon={<FaCodepen />}
          />
          <SocialLink
            color="#C74441"
            thetitle="Send me an email"
            theurl="mailto:manoz@outlook.com"
            icon={<FiMail />}
          />
        </div>
      </div>
    )
  }
}

export default SocialStuff
