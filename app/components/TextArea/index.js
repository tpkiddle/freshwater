/**
 * A form textarea with div wrapper and optional label
 */

import React from 'react';
import styled from 'styled-components';

import Label from '../Label';
import Wrapper from './Wrapper';

const TextArea = styled.textarea.attrs({
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
        <TextArea placeholder={this.props.placeholder} />
      </Wrapper>
    );
  }
}

export default WrappedElement;
