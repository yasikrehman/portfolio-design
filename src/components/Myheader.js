import React from 'react';
import {Nav,Navbar,Container,Button, Row,Col} from 'react-bootstrap';
import './header.css';
export const Myheader = () => {

    return (<>


    <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
            
            <Navbar.Brand href="#home"><h3>Abdul Rehman.S</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto heading">
                <Nav.Link href="#home"><p>Articles</p></Nav.Link>
                <Nav.Link href="#link"><p>Chats</p></Nav.Link>
                <Nav.Link href="#link"><p>Awards</p></Nav.Link>
                <Nav.Link href="#link"><p>About</p></Nav.Link>
            </Nav>
            <Nav.Link href="#link" className="justify-content-end">
                <Button type="button" class="btn btn-warning"><span>Get in touch</span></Button>
            </Nav.Link>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <div className='bg-dark'>
        <Container fluid="md" >
        <Row>
            <Col className='help-company'>
                <div className='HeadingText'>
                    <h1 style={{fontSize:"45px"}}> Helping companies build better,scalable software.</h1>
                    <p> Award winning web developer and author, with over 15+ years of working experience with fortune 500 companies like Apple,Google,Facebook,and more.
                    </p>
                </div>
            </Col>
        </Row>

        <Row>
            <div className='display-img'>
                <img src="./Logos/Walmart.svg" class="img-fluid" alt="" />
                <img src="./Logos/JP Morgan.svg" class="img-fluid" alt="" />
                <img src="./Logos/Visa.svg" class="img-fluid" alt="" />
                <img src="./Logos/tinder.svg" class="img-fluid" alt="" />
                <img src="./Logos/Samsung.svg" class="img-fluid" alt="" />
                <img src="./Logos/Verizon.svg" class="img-fluid" alt="" />
            </div>
        </Row>

        <Row>
                <Col className='Spense-content'>
                    <div className='content-img'>
                        <img src="./Spense.png" class="img-fluid" alt="" />
                    </div>
                    <div className='contentText'>
                        <h4 className='sitename' style={{fontSize:"16px"}}> Spense.Com </h4>
                        <p> Rethinking the way writers get paid,an open-source platform designed to help writers focus more on writing,and less on when and how they'll get paid. Project in collabration with Codewell.cc
                        </p>
                    </div>
                </Col>
                <Col className='yelpCamp-content'>

                    <div className='content-img'>  
                        <img src="./YelpCamp.png" class="img-fluid" alt="" />
                    </div>
                   
                    <div className='contentText'>
                        <h4 className='sitename' style={{fontSize:"16px"}}> YelpCamp.com</h4>
                        <p> Allowing  backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the Crowd's favorite in 2021.
                        </p>
                    </div>
                </Col>
         </Row>
         </Container>
         </div>
         {/* co found module starts here */}

        <div className='co-founder'>
        <Container >
         <Row >
                <Col className='co-founder-left'>
                    <div className='contentText'>
                        <h2 style={{fontSize:'35px'}}> A co-founder at one of the world's largest communities.</h2>

                        <p> The combined experience i have working at the top fortune 500 companies has allowed me to developer a skillset that help me in not just development,but in every aspect of any business.
                        </p>

                        <p> I'm proud to announce that i am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world opportunities.
                        </p>

                    </div>
                </Col>
                <Col className='co-founder-right'>
                    <div className='contentText'>
                        <p> As a developer, you have everything available to you and all that's holding you back is yourself. </p>

                        <p> A quote I live by perfectly illustrates what I mean.</p>

                        <p> "How big would you dream, if you knew you wouldn't fail?"
                            You've already gone through the hardest parts being a developer,It's time to elevate your skills and become a leader in something you're passionate about.
                        </p>

                        <p> I'm happy to chat over coffee some time about how I can help your company.
                        </p>

                    </div>
                </Col>
         </Row>
         {/* co found module ends starts here */}
         </Container>
        </div> 

        <div className='bg-dark last-grid'>
            <Container>
                <Row>
                    <div className='col-md-6 co-founder-left'>
                        <div className='contentText'>
                            <h2> Interested in working with me?</h2>
                            <p> I'm active on all social media platforms listed below,but you can also me an email and I will get back to you within 24-48 hours.
                            </p>
                        </div>
                        <div className='finalButton'>
                            <Button type="button" class="btn btn-warning"><span>Get in touch</span></Button>
                        </div>
                    </div>
                </Row>  
            </Container>
        </div>

        <div className='co-founder last-footer'>
        <Container >
         <Row >
                <Col className='co-founder-left'>
                    <h4>Abdul Rehman S</h4>
                </Col>
                <Col className='co-founder-right'>
                    <div className='social-links justify-content-end'>
                        <img src="./Social Icons/Github.svg" class="img-fluid" alt="" />
                        <img src="./Social Icons/LinkedIn.svg" class="img-fluid" alt="" />
                        <img src="./Social Icons/Twitter.svg" class="img-fluid" alt="" />
                    </div>
                </Col>
         </Row>
         {/* co found module ends starts here */}
         </Container>
        </div> 

    </>)
}