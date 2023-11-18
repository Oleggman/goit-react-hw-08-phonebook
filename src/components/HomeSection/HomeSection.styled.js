import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContaier = styled.div`
  margin: 0 auto;
  width: 760px;
`;

export const HomeImage = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const HomeTitle = styled.h1`
  color: #f0f0f0;
  font-size: 36px;
  text-align: center;
  margin-bottom: 12px;
`;

export const HomeSectionDesc = styled.p`
  color: #f0f0f0;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const HomeLink = styled(Link)`
  display: block;
  margin: 0 auto;;
  padding: 8px 12px;
  width: fit-content;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #23355B;
  background-color: #00EFFF;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &:hover {
    color: #f0f0f0;
    background: #2461BA;
  } 
`;
