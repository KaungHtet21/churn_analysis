import { Button } from "antd";
import styled from "styled-components";

const Styles = {
  NavbarContainer: styled.nav<{ $isScrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 23rem;
    padding-block: 1rem;
    background-color: ${(props) =>
      props.$isScrolled ? "white" : "transparent"};
    box-shadow: ${(props) =>
      props.$isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000;
  `,
  Logo: styled.div<{ $isScrolled: boolean }>`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};
    transition: color 0.3s ease;
  `,
  ContactButton: styled(Button)`
    background-color: #1890ff;
    border-color: #1890ff;
    color: white;
    &:hover {
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  `,
};

export default Styles