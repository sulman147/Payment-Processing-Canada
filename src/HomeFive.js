import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Switcher from './components/Switcher';
import Aux from './hoc/Aux_';
import { Link } from 'react-router-dom';

class HomeFive extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(images/img-2.jpg)',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
      };
 
  	return (
        <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="home-padding-t-150 position-relative" id="home"  style={bkg1}>
                    <div className="bg-overlay"></div>
                       <div className="display-table">
                            <div className="home-cell-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-white text-center">
                                            <h1 className="home-title">We help startups launch their products</h1>
                                            <p className="padding-t-15 home-desc">Etiam sed.Interdum consequat proin vestibulum className at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                                            <Link to="JavaScript:Void(0);" className="btn btn-custom margin-t-20">Get Started</Link>
                                            <img src="images/home-dashboard.png" alt="" className="img-fluid center-block margin-t-20" />  
                                        </div>
                                    </div>
                            </div>
                       </div>
                    </div>
                </section>

                {/* Services Component*/}
                <Services />

                {/* Features Component*/}
                <Features />
                
                {/* Descriptions Component*/}
                <Descriptions />

                {/* Pricing Component*/}
                <Pricing />

                {/* Team Component*/}
                <Team />

                {/* Process Component*/}
                <Process />

                {/* Testi Component*/}
                <Testi />

                {/* Started Component*/}
                <Started />

                {/* Blog Component*/}
                <Blog />

                {/* Contact Component*/}
                <Contact />

                {/* SocialMedia Component*/}
                <SocialMedia />
                
                {/* Footer Component*/}
                <Footer />

                {/* FooterLinks Component*/}
                <FooterLinks />

                {/* Switcher Component*/}
               <Switcher /> 
        </Aux>
  	);
  }
}

export default HomeFive;