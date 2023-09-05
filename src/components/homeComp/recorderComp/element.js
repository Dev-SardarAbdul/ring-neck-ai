import styled from "styled-components";

export const RecorderCompWrapper = styled.div`
  overflow: hidden;
  margin-top: 2rem;
  min-height: calc(100vh - 2rem - 4rem);
  position: relative;

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
  }

  .sidebar-div {
    width: 289px;
  }

  .main-content-div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 2rem - 4rem);
  }

  .top-logo {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 149px;
    height: 149px;
    z-index: 100;
  }
`;

export const PlayBtnDiv = styled.div`
  width: 264.129px;
  height: 261.527px;
  position: relative;

  .bg-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
`;

export const PlayBtn = styled.button`
  border: none;
  width: 56px;
  height: 56px;
  fill: #fff;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.33));
  border-radius: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 10px;

  .play-icon {
    color: #241b52;
    font-size: 18px !important;
  }
`;
