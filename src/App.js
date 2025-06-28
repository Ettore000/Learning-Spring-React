
import React, { useEffect, useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Slide,
} from '@mui/material';
import { grey, blueGrey, cyan } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey[900],
      paper: blueGrey[800],
    },
    primary: {
      main: cyan[400],
    },
    secondary: {
      main: grey[500],
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  const [veicoli, setVeicoli] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/veicoli")
      .then(res => res.json())
      .then(data => {
        setVeicoli(data);
        setLoading(false);
      })
      .catch(() => {
        setVeicoli([]);
        setLoading(false);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" align="center" gutterBottom>
            ⚡ Lista Veicoli Elettrici
          </Typography>
        </Slide>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <TableContainer component={Paper} elevation={6}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Marca</TableCell>
                    <TableCell>Modello</TableCell>
                    <TableCell>Autonomia</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {veicoli.map((v) => (
                    <TableRow key={v.id}>
                      <TableCell>{v.id}</TableCell>
                      <TableCell>{v.marca}</TableCell>
                      <TableCell>{v.modello}</TableCell>
                      <TableCell>{v.autonomia} km</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Slide>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
