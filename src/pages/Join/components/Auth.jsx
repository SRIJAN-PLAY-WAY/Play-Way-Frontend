import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../Join.scss';

const Auth = ({type}) =>{
  const [name, setName] = useState(null);
  const [aadhar, setAadhar] = useState(null);
  const [std, setStd] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [password2,setPassword2] = useState(null);

    return (
      <div>
         <Form style={{display:"flex",flexDirection:'column'}}>  
             <br/>
             { 
             type === 'signup'?
             <div>
             <Form.Group controlId="formBasicEmail">
                <Form.Control type="name" placeholder="Enter Student's Name" value={name} onChange={(e) => setName(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group> <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Student's Aadhar Number" value={aadhar} onChange={(e) => setAadhar(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group> <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Standard of the Student" value={std} onChange={(e) => setStd(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group>
            </div>
            :null
            }
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} autocomplete="chrome-off"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="new-password"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" value={password2} 
                onChange={(e) => setPassword2(e.target.value)} autocomplete="new-password"/>
            </Form.Group>

            <Button style={{marginTop:'1rem',width:'60%',alignSelf:'center',fontWeight:'bolder',fontSize:'1.08rem'}} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    );
};

export default Auth;