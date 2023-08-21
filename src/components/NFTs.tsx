import React from 'react'
import fetchNfts from '../api/fetchNfts'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {NFT} from "../common/types";
import Container from "@mui/material/Container";

const resource = fetchNfts()

const Nfts = () => {
  const nfts = resource.read()
  console.log(nfts)

  const renderTodos = nfts.map((nft: NFT) => {
    return (
      <Grid item key={nft.id} xs={12} sm={6} md={4}>
        <Card
          sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={nft.img}
          />
          <CardContent sx={{flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2">
              {nft.title}
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content. {nft.mintAddress}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  })

  return (
    <Container sx={{py: 8}} maxWidth="md">
      <Grid container spacing={4}>
        <>{renderTodos}</>
      </Grid>
    </Container>
  )
}

export default Nfts
