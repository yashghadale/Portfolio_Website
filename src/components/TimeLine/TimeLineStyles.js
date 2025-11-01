
import styled from 'styled-components'
import { SectionText } from '../../styles/GlobalComponents'; 
export const CarouselContainer = styled.ul`
  width: 100%;
  background: #0F1624;
  padding: 1rem 0;
  list-style: none;

  display: flex;
  flex-direction: row; /* ensure horizontal layout */
  overflow-x: auto; /* enable horizontal scrolling */
  gap: 1.5rem;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  margin: 0 auto 80px auto;

  /* remove scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column; /* stack vertically on small screens */
    overflow-x: hidden;
    gap: 1rem;
    margin-bottom: 16px;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.li`
 
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  min-width: 300px;
  flex-shrink: 0;
  scroll-snap-align: start;
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  transform: translateX(-10px);
  

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 240px;
    min-width: 240px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    min-width: unset;
    background: #0F1624;
    padding: 1rem;
    border-radius: 8px;
    transform: translateX(-8px);
  }
`;


export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: inline-block;
  position: relative;
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00c6ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 4s ease infinite;
  margin-bottom: 8px;
  transition: transform 0.3s ease;

  

  @keyframes gradientMove {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 6px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled(SectionText)`
  


  
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
