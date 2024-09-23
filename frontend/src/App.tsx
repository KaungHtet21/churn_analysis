import { ConfigProvider } from "antd";
import { ThemeProvider as StyledThemeProvider, StyleSheetManager } from "styled-components";
import { themeColor } from "./themeColor";
import isPropValid from "@emotion/is-prop-valid";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ConfigProvider>
      <StyledThemeProvider theme={themeColor.light}>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Dashboard />
        </StyleSheetManager>
      </StyledThemeProvider>
    </ConfigProvider>
  );
}

function shouldForwardProp(propName: any, target: any) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}

export default App;
