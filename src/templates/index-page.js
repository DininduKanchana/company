import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import TextLoop from "react-text-loop";
import Img from "gatsby-image"

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade'

const width = '100%', height='400px';
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export const IndexPageTemplate = ({
  image,
  image1,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  
}) =>
{
  return (
    <div>
      <div
        //className="full-width-image margin-top-0"
        style={{
          // backgroundImage: `url(${
          //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="full-width-image margin-top-0">
        <Carousel maxTurns = {1000}>
          <Slide right>
            <div>
              <Fade big>
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    color: 'white',
                    padding: '0.25em',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: 10
                  }}> 
                    Always in Trend
                  
                {/* {title} */}
                </h1>
              </Fade>
              <Img fluid={image.childImageSharp.fluid} alt="img"/>
            </div>
          </Slide>
          <Slide right>
            <div>
            <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: 'white',
                  padding: '0.25em',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  zIndex: 10
                }}> 
                  We are Creative Professionals
                
              {/* {title} */}
              </h1>
              <Img fluid={image1.childImageSharp.fluid} alt="img1"></Img>
            </div>
          </Slide>
          {/* <Slide right>
            <div>
            <Img fluid={image.childImageSharp.fluid.src} alt="img1"></Img>
              <p>Slide Description</p>
            </div>
          </Slide> */}
        </Carousel>
        </div>
         
        {/* <div id="paticles"
          className="full-width-image margin-top-0"
        >
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 100
                  },
                  "size": {
                      "value": 3
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              },
            }}

            style={{
             display: 'block',
             verticalAlign: 'bottom',
             height: '80vh',
             width: '100vw',
             backgroundAttachment:'fixed'           //zIndex: '-1'
            }}

         />
        </div> */}
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          
          <h1
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(146, 0, 247) 0.5rem 0px 0px, rgb(146, 0, 247) -0.5rem 0px 0px',
              backgroundColor: 'rgb(43, 100, 210)',
              color: 'white',
              lineHeight: '1',
              padding: '2.25em',
              textAlign: 'center'
            }}
          >
            We will undertake
            {" "}<TextLoop>
              <span>Static WebSites Development </span>
              <span>Web Applications Development </span>
              <span>Single Page Web Applications Development </span>
              <span>Software Development </span>
              <span>Mobile App Development </span>
            </TextLoop>{" "}
          
            {/* {subheading} */}
          </h1>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image1={frontmatter.image1}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
