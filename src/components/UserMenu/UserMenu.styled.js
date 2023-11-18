import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const WelcomeMessage = styled.p`
  text-transform: uppercase;

  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 10s linear infinite;
  display: inline-block;
    font-size: 24px;

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`;

export const LogoutButton = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #00EFFF;
  font-size: 32px;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 50%;

  transition: color 200ms, background-color 200ms;

  &:hover {
    color: #23355B;
    background-color: #00EFFF;
  }
`;