import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { startLoginUser } from "../action/activeUserAction";
import Swal from 'sweetalert2'
const Login = (props) => {
    const { popUp,setAuth, handlePopUp } = props
    const dispatch=useDispatch()
    const {users}=useSelector(state=>state)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const user=users.find(user=>user.username==name)
        if(user&&user.password==password){
            handlePopUp()
            dispatch(startLoginUser(user))
            setName('')
            setPassword('')
            setAuth(true)
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Inalied Password or username!',
                footer: '<a href="">Forgot Password?</a>'
              })
        }
    }
    return (
        <div>
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                </div>
                <Modal show={popUp?true:false} >
                    <Modal.Header>
                        <Modal.Title>Login Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter User Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group><br/>
                                <Button variant="primary" type="submit" >
                                    Login
                                </Button>
                            </Form>
                        </>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to='/'><Button variant="secondary" onClick={handlePopUp}>Close Modal</Button></Link>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
export default withRouter(Login)