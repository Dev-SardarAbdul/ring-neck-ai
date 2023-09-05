import styled from "styled-components";

export const DemoCompWrapper = styled.div`
  overflow: hidden;
  background: linear-gradient(107deg, #000 1.11%, #02274a 100%);
  min-height: 100vh;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ring-neck-text {
    color: #fff;
    text-align: center;
    font-size: 33px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    margin-top: 1rem;
  }

  .demo-text {
    color: #fff;
    text-align: center;
    font-size: 66px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }

  .sub-text {
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
  }
`;

export const StartBtn = styled.button`
  border-radius: 88px;
  border: 3px solid #4169e1;
  background: rgba(217, 217, 217, 0);
  width: 309px;
  height: 60px;
  color: #5f5f5f;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin-top: 1rem;
`;
