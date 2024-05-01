import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={5}>
        <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-player</span></h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae iste voluptates veritatis eum vel quaerat facere! Doloribus laudantium quidem, amet sit temporibus ullam ducimus fugit nihil. Consectetur fugit maxime ducimus.</p>
      <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
      </Col>
      <Col></Col>

    </Row>


    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
     <h3>Features</h3>
     <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src='https://64.media.tumblr.com/add23123b088c3301cc2c71f7767048d/tumblr_n6djwoc3M51shpedgo1_640.gif'>
        </Card.Img>
        <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text>
             some quick example text to build on the card title and make up the bulk of the card's content
            </Card.Text>
          </Card.Body>
      
      </Card>


      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src='https://media1.tenor.com/m/WOQ4NaiPiRwAAAAC/beats-art.gif'>
        </Card.Img>
        <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text>
             some quick example text to build on the card title and make up the bulk of the card's content
            </Card.Text>
          </Card.Body>
      
      </Card>


      <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant="top" height={'300px'} width={'300px'} src='https://cdn.dribbble.com/users/1443878/screenshots/3853432/media/a3e287f1f0694b6053510b205817d35e.gif'>
        </Card.Img>
        <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text>
             some quick example text to build on the card title and make up the bulk of the card's content
            </Card.Text>
          </Card.Body>
      
      </Card>

     </div>
    </div>



    <div className="container  border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
    <div className="col-lg-5">
      <h4 className='text-warning'>Simple, Powerful & Fast</h4>
      <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, sunt dolor! Minima inventore perferendis quas tenetur voluptate quidem, voluptatum ipsa aspernatur culpa? Maiores, ipsum ex nobis explicabo ratione facere sunt.</h6>
    
    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, sunt dolor! Minima inventore perferendis quas tenetur voluptate quidem, voluptatum ipsa aspernatur culpa? Maiores, ipsum ex nobis explicabo ratione facere sunt.</h6>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing History</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, sunt dolor! Minima inventore perferendis quas tenetur voluptate quidem, voluptatum ipsa aspernatur culpa? Maiores, ipsum ex nobis explicabo ratione facere sunt.</h6>

    </div>

    <div className="video col-lg-5">
      <iframe width="100%" height="470" src="https://www.youtube.com/embed/9AizchSQURA" title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>

    </div>
    </div>
    </>
  )
}

export default LandingPage