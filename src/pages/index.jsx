import React from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import styled from 'styled-components';

import Hero from '../components/Hero';
import SiteLayout from '../components/Layouts/SiteLayout';
import Section from '../components/Section';
import Container from '../components/Container';

configureAnchors({ offset: -60, scrollDuration: 400 });

const H3 = styled.h3`
  margin-bottom: 1.5rem;
  font-weight: 300;
  background-image: -webkit-gradient(linear, 0% 0%, 25% 100%, from(#387cc6), to(#c23ffd));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: .5em 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 86%;
  border-left: 7px solid #ccc;

  &:before {
    content: '\u201C';
    margin-right: 0.10em;
    color: #ccc;
    font-size: 4em;
    font-family: Georgia, Cambria, 'Times New Roman', Times, serif !important;
    line-height: 0.1em;
    vertical-align: -0.4em;
  }
`;

const StyledA = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 5px;
  outline: none;
  color: #000 !important;
  padding-bottom: 3px;
  border-bottom: 2px solid #9e9e9e;
  transition: color .1s !important;

  &:first-child { margin-left: 0; }
  &:last-child { margin-right: 0; }

  &:hover {
    color: transparent;
    text-decoration: none !important;
    transition: color .1s !important;
  }

  &[href*="facebook.com"]:hover { color: #3a589b !important; border-color: #3a589b }
  &[href*="twitter.com"]:hover { color: #33ccff !important; border-color: #33ccff }
  &[href*="github.com"]:hover { color: #171515 !important; border-color: #171515 }
  &[href*="instagram.com"]:hover { color: #3f729b !important; border-color: #3f729b }
  &[href*="linkedin.com"]:hover { color: #008cc9 !important; border-color: #008cc9 }
  &[href*="stackoverflow.com"]:hover { color: #f69c55 !important; border-color: #f69c55 }
  &[href*="codepen.io"]:hover { color: #000000 !important; border-color: #000000 }
`;

const Cite = styled.cite`
  display: block;
  margin-left: 2.1em;
  color: #9e9e9e;
`;

class IndexPage extends React.Component {
  render() {
    return (
      <SiteLayout>
        <Container>
          <Hero titleAlt="Kevin Legrand" />
          <ScrollableAnchor id={'ido'}>
            <Section>
              <header style={{ marginBottom: '24px' }}>
                <H3>What I do</H3>
                <Blockquote>
                  I hear and I forget. I see and I remember. I do and I understand.
                  <Cite>— Confucius</Cite>
                </Blockquote>
              </header>
              <div>
                <p>Most of my time I am building websites for my clients or for me.
                  Usually simple responsive websites with SCSS, WordPress and some Javascript.</p>

                <p>In my spare time I am building other things like nodejs apps or
                  more recently Facebook apps.</p>

                <p>Sometime I also write articles about design and development.</p>
              </div>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'ilearned'}>
            <Section>
              <header style={{ marginBottom: '24px' }}>
                <H3>What I learn(ed)</H3>
                <Blockquote>
                  Tell me and I forget. Teach me and I remember. Involve me and I learn.
                  <Cite>— Benjamin Franklin</Cite>
                </Blockquote>
              </header>
              <div>
                <p><strong>Known:</strong> HTML5, CSS3, SCSS, LESS, Bootstrap,
                WordPress, WooCommerce, Prestashop, MySQL, GIT, SSH, Bash, Javascript,
                React, jQuery, Adobe Photoshop, Adobe Illustrator, Adobe Lightroom,
                Adobe After Effect, Cinema 4D,
                <span title="Shhhht" style={{
                  fontSize: '80%',
                  color: '#9e9e9e',
                  textDecoration: 'line-through',
                  cursor: 'not-allowed',
                }}>torrents</span>, Facebook Apps</p>

                <p><strong>Improving:</strong> ECMAScript 6/7, Gatsby,
                  Facebook Messenger Bots, VueJS</p>
              </div>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'clients'}>
            <Section>
              <header style={{ marginBottom: '24px' }}>
                <H3>Who are my clients</H3>
                <Blockquote>
                  A doctor can bury his mistakes but an architect can only advise
                  his clients to plant vines.
                  <Cite>— Frank Lloyd Wright</Cite>
                </Blockquote>
              </header>
              <div>
                <p>The Internets, Dodie, Faim de Lyon, Club des CML, Footengo,
                Michel Bastos, Otako, Écoute Prolongée, FNAQPA, Éclat de Verre,
                  Fél&apos;Ain, Darty, Charal, Hépar, Les Portes du Soleil, April</p>
              </div>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'where'}>
            <Section id="where">
              <header style={{ marginBottom: '24px' }}>
                <H3>Where I am</H3>
                <Blockquote>
                  The only thing there is in the community, is the illusion of being together
                  <Cite>— Unknown</Cite>
                </Blockquote>
              </header>
              <div>
                <p>
                  <StyledA data-hover="Facebook" href="https://www.facebook.com/lboldair" target="_blank">Facebook</StyledA>
                  <StyledA data-hover="Twitter" href="https://www.twitter.com/manoz" target="_blank">Twitter</StyledA>
                  <StyledA data-hover="Github" href="https://github.com/manoz" target="_blank">Github</StyledA>
                  <StyledA data-hover="Instagram" href="https://www.instagram.com/manoz_" target="_blank">Instagram</StyledA>
                  <StyledA data-hover="LinkedIn" href="https://fr.linkedin.com/in/klegr" target="_blank">LinkedIn</StyledA>
                  <StyledA data-hover="Stackoverflow" href="http://stackoverflow.com/users/3272666/manoz" target="_blank">Stackoverflow</StyledA>
                  <StyledA data-hover="Codepen" href="http://codepen.io/Manoz" target="_blank">Codepen</StyledA>
                </p>
              </div>
            </Section>
          </ScrollableAnchor>

          <ScrollableAnchor id={'hire'}>
            <Section id="hire">
              <header style={{ marginBottom: '24px' }}>
                <H3>Hire me</H3>
                <Blockquote>
                  If you refuse to discuss with the fools, you not discuss with anyone
                  <Cite>— Unknown</Cite>
                </Blockquote>
              </header>
              <div>
                <p>Nope, I&apos;m not open for job contracts &#58;&#41;</p>
              </div>
            </Section>
          </ScrollableAnchor>
        </Container>
      </SiteLayout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.string,
};

export default IndexPage;
