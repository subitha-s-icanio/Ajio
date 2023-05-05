import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./routes";
import { theme } from "./utils/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>    
  );
}

export default App;    
