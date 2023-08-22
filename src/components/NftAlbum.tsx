import * as React from 'react';
import {Suspense} from 'react';
import AppBar from '@mui/material/AppBar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import NFTs from "./NFTs";
import {TextField} from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Chriserus">
        Chriserus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function NftAlbum() {
  const [filter, setFilter] = React.useState("")

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <AssignmentIcon sx={{mr: 2}}/>
          <Typography variant="h6" color="inherit" noWrap>
            Okay Bear NFTs
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Okay Bear NFTs
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community
              that will transcend the internet into the real world.
            </Typography>
            <TextField label="Search NFT name" variant="outlined" value={filter}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}/>
          </Container>
        </Box>
        <Suspense fallback={<Typography align="center" color="text.secondary" paragraph>Loading NFTs...</Typography>}>
          <NFTs filter={filter}/>
        </Suspense>
      </main>
      {/* Footer */}
      <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright/>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
