import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';



export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  min-height: 450px;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 0 auto; /* centers horizontally */
  transform: translateY(-48px);

  /* Tablet screens (max-width: 1024px) */
  @media (max-width: 1024px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    transform: translateY(-10px);
  }

  /* Medium devices (max-width: 768px) */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    width: 100%;
    min-height: 350px;
    transform: translateY(-5px);
  }

  /* Small screens (max-width: 480px) */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding: 1rem;
    min-height: 300px;
    width: 100%;
    transform: translateY(0); /* optional for small screens */
  }
`;


export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
   font-weight: 600;
  font-size: 3rem; /* original font size */
  line-height: 3.6rem; /* approximate for spacing */
  margin-bottom: 0.5rem;
  margin-left: 6rem;
  width: max-content;
  max-width: 100%;

  /* Gradient text */
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Optional padding for hero/section spacing */
  padding: 0;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 2rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    padding: 0;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #585252ff;
  outline: none;
  font-size: 2rem;
  margin-left: 6rem;
  background-color: ${({ theme }) => theme.colors.background ||'#0f1624'};
  color: ${({ theme }) => theme.colors.text || '#fff'};

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #585252ff;
  outline: none;
  font-size: 2rem;
  resize: vertical;
  margin-left: 6rem;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.background || '#0f1624'};
  color: ${({ theme }) => theme.colors.text || '#fff'};

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 2rem;
    height: 120px;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-left: 1rem;
    height: 100px;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: #2763dbff;
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 15rem;
  align-self: flex-start;
  transition: 0.3s ease;

  &:hover {
    background-color: #005ac1;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-left: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;

export const Span = styled.span`
 font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  transform: translateX(-22px);
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
    transform: translateX(-11px);
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  gap:50px;
  margin-left: 50px;   
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    margin-left: 50px
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:30%;
  justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.span`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  margin: 0 1.5rem;
  color: white;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  

  /* Default icon size (desktop) */
  svg {
    font-size: 3rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: #212d45;
    transform: scale(1.15);
    cursor: pointer;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  /* Tablet view */
  @media screen and (max-width: 768px) {
    svg {
      font-size: 2.5rem;
    }
    padding: 8px;
  }

  /* Mobile view */
  @media screen and (max-width: 480px) {
    svg {
      font-size: 2rem;
    }
    padding: 6px;
  }
`;
