// @flow
import React, { useState } from 'react';
import {Tabs,Tab} from 'react-bootstrap'
import './Join.scss';
import Auth from './components/Auth';

const Join = () => {
  return (
    <section className="Join">
       <div className="join-flex-container">
        <div className="join-container">
        <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" style={{backgroundColor:'#82CFD5',borderRadius:'3%'}}>
          <Tab eventKey="signin"  title={<div className="tab-title">Sign In</div>}>
            <Auth type="signin"/>
          </Tab>
          <Tab eventKey="signup" title={<div className="tab-title">Sign Up</div>}>
            <Auth type="signup" />
          </Tab>
        </Tabs>
        </div>
       </div>
    </section>
  );
};

export default Join;
