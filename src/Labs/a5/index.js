import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Assignment5() {
    const BASE = process.env.REACT_APP_BASE;
    const [loading, setLoading] = useState(false);
    const onClose = () => {
        setLoading(false);
    }
    const fetchWelcome = async () => {
        setLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 8000));
        const response = await axios.get(`${BASE}/a5/welcome`);
        setLoading(false);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a
                    href={`${BASE}/a5/welcome`}
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            {loading && (
                <div>
                    <Modal
                        show={loading}
                        onHide={onClose}
                        backdrop="static"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Please Wait for Waking Up the Server ... </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="text-center">
                                <div className="spinner-border text-danger m-3" style={{width: '100px', height: '100px'}} role="status"></div>
                                <br/>
                                Please Wait for 30 Seconds to Wake Up Server : )
                                <br/>
                                <p className="text-danger">The server will spin down if no request is sent to it within 15 minutes. </p>
                                Due to the Restriction of Render: <p className="text-warning">"Free instance type will spin down with inactivity (15 minutes)."</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={(e) => {
                                setLoading(false)
                            }}
                            >Ok</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
            {/*<SimpleAPIExamples />*/}
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;

