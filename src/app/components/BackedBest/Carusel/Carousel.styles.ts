import styled from "@emotion/styled";

export const WrapperList = styled.div<{ isDark: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100px;
    height: 100%;
    background: ${({ isDark }) =>
      isDark
        ? "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)"};
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: scaleX(-1);
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  animation: scroll 30s linear infinite;
  will-change: transform;
  width: max-content;

  @keyframes scroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  flex-shrink: 0;
`;