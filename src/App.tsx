import { Stack } from "@mui/material";
import Calculator from "./Calculator";

const App: React.FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100svh">
      <Calculator />
    </Stack>
  );
};

export default App;
