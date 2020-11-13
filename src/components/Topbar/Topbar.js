import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import '../../App.css';
import ReactBootstrapSlider from 'react-bootstrap-slider';



const sortingMethods = [
    "Bubble Sort",
    "Merge Sort",
    "Insertion Sort",
    "Selection Sort",
    "HeapSort",
    "QuickSort"
];
const dropdownitems = sortingMethods.map((sorts) => <Dropdown.Item >{sorts}</Dropdown.Item>)
class Bottom extends Component {

    render()
    {

        return (
            <div className="top">
                <Container fluid={true}>
                    <h1 className='title-text'>
                        SORTING VISUALIZER</h1>
                    <Row className="text-center">
                        <Col >
                            <h6>Select Algorithm</h6>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {dropdownitems}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col >
                            <h6># Of bars</h6>
                            <input type="range" id="volume" name="volume"
         min="0" max="11"/>
                            <h6># on top goes here</h6>
                        </Col>
                        <Col >
                            <h6>Randomize</h6>
                                <Button variant="primary">Primary</Button>{' '}
                        </Col>

                    </Row>
                </Container>
            </div>

        )
    }
}

export default Bottom;