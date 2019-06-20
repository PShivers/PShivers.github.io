import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import me from '../images/ProfessionalPortraitOfMe.jpg';
import styled from 'styled-components';

const Portrait = styled.div`
  object-fit: contain;
  height: 100px;
  width: 150px;
  background-image: url(${me});
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Portrait />
        <Switch />
      </div>
    );
  }
}

export default Home;
