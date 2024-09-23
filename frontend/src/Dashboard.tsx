import styled from "styled-components";
import { CCarousel, CustomerForm, Indicator, Navbar, PowerBIDashboard } from "./components";
import Vision from "./components/Vision";

const PageWrapper = styled.div`
  width: 100%;
  align-self: center;
  height: 100vh;
  margin: auto;
  background-color: ${(p) => p.theme.background};
  font-family: "Noto Sans KR", "Noto Sans Korean", "Nanum Gothic";
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Dashboard = () => {
  return (
    <PageWrapper>
      <Navbar />
      <CCarousel />
      <Indicator />
      <Vision />
      <PowerBIDashboard />
      <CustomerForm />
    </PageWrapper>
  );
};

export default Dashboard;
