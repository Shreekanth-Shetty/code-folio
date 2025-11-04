import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.accent1};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.theme.colors.accent1};

  &:hover {
    background-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.background1};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 35px;
    height: 35px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;