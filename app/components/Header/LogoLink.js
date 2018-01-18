import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline;
  padding: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #666;
  pointer: cursor;
  margin-right: 20px;

  &:hover {
    text-decoration: none;
    color: #27a2db;
    pointer: cursor;
  }
`;
