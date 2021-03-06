/**
 * A form input with div wrapper and optional label
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../Label';
import Wrapper from './Wrapper';

import {
  INPUT_TYPES,
} from './constants';

const Input = styled.input.attrs({
  type: (props) => {
    return INPUT_TYPES.includes(props.type) > -1 ? props.type : 'text';
  },
  placeholder: (props) => {
    return props.placeholder || '';
  },
})`
  outline: none;
  background: #fff;
  padding: 8px;
  width: 100%;
  display: block;
  border: 1px solid #f1f1f1;
  line-height: 1;
`;

class WrappedElement extends React.Component {
  renderLabel() {
    if (this.props.label) {
      return (
        <Label>{this.props.label}</Label>
      );
    }

    return null;
  }

  render() {
    const label = this.renderLabel();
    return (
      <Wrapper>
        {label}
        <Input
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </Wrapper>
    );
  }
}

export default WrappedElement;
