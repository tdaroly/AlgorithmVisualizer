import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import '../../App.css';

const sortingMethods = ["Bubble Sort","Merge Sort", "Insertion Sort","Selection Sort","HeapSort","QuickSort"];
const dropdownitems = sortingMethods.map((sorts) =>
<Dropdown.Item >{sorts}</Dropdown.Item>
)
class Bottom extends Component {

    render()
    {

        return (
            <div className="top">
                <Container fluid>
                    <h1 className='title-text'>
                        SORTING VISUALIZER</h1>
                    <Row >
                        <Col >
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {dropdownitems}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col ># Of bars</Col>
                        <Col >Randomize Button</Col>

                    </Row>
                </Container>
            </div>

        )
    }
}

export default Bottom;