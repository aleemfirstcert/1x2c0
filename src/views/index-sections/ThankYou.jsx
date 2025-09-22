import DemoFooter from 'components/Footers/DemoFooter'
import IndexNavbar from 'components/Navbars/IndexNavbar'
import thankyou from '../../assets/img/thank-you.png'
import React from 'react'
import {
    Container,
    Row,
    Col,
    Button
    
  } from "reactstrap";
import { Helmet } from 'react-helmet';
function ThankYou() {
  return (
    <div>
      <Helmet>
      <title>Thank You</title> 
        <meta name="description" content="Thank You Page-FirstCert Certification"/>
        <link rel='canonical' href="/thankyou"/>
      </Helmet>
      <IndexNavbar/>
      <div className="main mt-4 ">
      <div className="section landing-section ">
      <Container >
          <Row >
          <Col md="12"  className='thankyou'  style={{ display: "flex", justifyContent: "center" }}>
            
          <img   loading="lazy"  src={thankyou} alt="FirstCert contactus" style={{ maxWidth: "100%",
  height: "auto", maxHeight:"28rem",transition: "transform 0.3s ease-in-out",marginInline:"auto"
}}
onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
/>
</Col>
              </Row>
              <Row>
                <h1 className='mx-auto  text-center '
                style={{fontWeight:"800"}}>THANK YOU !
                <p>Your Enquiry has been successfully sent and being reviewed</p>
                </h1>
              
              </Row>
                </Container>
                </div>
      <DemoFooter/>
    </div>
    </div>
  )
}

export default ThankYou
