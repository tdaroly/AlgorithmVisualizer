import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Topbar extends Component{

    render()
    {


        return(
                <div>
                        
                        <Container fluid style = {{backgroundColor:'#f7b7f6'}}>
                                    
                        <Row>
                            <Col>Choose Algorithm</Col>
                            <Col># Of bars</Col>
                            <Col>Randomize Button</Col>
                        </Row>
                        </Container>
                </div>
            
            
        )
    }
}


export default Topbar;