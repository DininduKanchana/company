import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { TweenLite, TweenMax } from 'gsap';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)

    this.myElement = null;
    // reference to the animation
    this.myTween = null;

    this.myText = null

    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  componentDidMount(){
    // use the node ref to create the animation
    // this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
    // TweenMax.from(this.myText, 1, {opacity:0})
    console.log(this.myText)
  }

  over(){
    TweenMax.to(this.myText, 0.5, {backgroundColor:"red"})
    //TweenMax.to($(this).find("span"), 0.3, {rotation:360, scale:2, x:50, delay:0.6})
  }
  
  out(){
    TweenMax.to(this.myText, 0.5, {backgroundColor:"blue"})
    //TweenMax.to($(this).find("span"), 0.3, {rotation:0, scale:1, x:0, overwrite:"all"})
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Services
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
