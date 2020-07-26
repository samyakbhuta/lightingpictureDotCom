import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Loki Verma!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>
          <ul>
            <li>
              Visit me at <a href="https://lightingpicture.com/">Website</a>
            </li>
            <li>
              Call me on <a href="tel:+918460404349">+91 8460 40 43 49</a>
            </li>
            <li>
              Send me a mail at <a href="mailto:lightingpictures1@gmail.com">lightingpictures1@gmail.com</a>
            </li>
            <li>
              Send a message on my <a href="https://api.whatsapp.com/send?phone=918460404349">WhatsApp</a>
            </li>
          </ul>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
