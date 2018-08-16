import React from 'react';

import PageLayout from '../components/Layouts/PageLayout';
import Container from '../components/Container';

class AboutPage extends React.Component {
  render() {
    return (
      <PageLayout pageSEO>
        <Container>
          <h1>About me</h1>
          <p>
            My name is Kevin (a.k.a Manoz) I am 31 years old and I have been
            doing front-end development for a little over 7 years now.
          </p>

          <p>
            I started by doing simple HTML and CSS to create small Facebook apps
            at the time when brands used to put them on their Pages. At that
            time there were not many framework choices and everything was done
            almost by hand. Our only hope was in the jQuery plugins....
          </p>

          <p>
            Little by little I followed my own path and started working as a
            freelancer for web agencies.
          </p>

          <p>
            At that time I spent a lot of time writing posts on my blog. Whether
            it was to talk about Lyon (my city) or my passion for web
            development and the high-tech world, I easily found reasons to spend
            hours writing.
          </p>

          <p>
            Today the front-end development world has changed (thank you
            Facebook, AirBnB, Google etc...) and I had to adapt. <br />I started
            working late on React and today I try to do as much as I can.
          </p>

          <p>
            In 2018 I stopped my job as Freelance and I was hired in a nice web
            agency as a front-end dev.
          </p>

          <p>
            Today I build websites with Laravel or React and I discovered myself
            a new recent passion for{' '}
            <a href="https://next.gatsbyjs.org/">Gatsby</a>.<br />I{'\''} ve
            decided to restart my blog so expect to see a lot of articles about
            front-end development and my beautiful city (as soon as I{'\''}
            ve found time to get started).
          </p>

          <p>Kisses from France ❤️</p>
        </Container>
      </PageLayout>
    );
  }
}

export default AboutPage;
