import React from 'react'
import fetchNfts from '../api/fetchNfts'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {NFT} from "../common/types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const resource = fetchNfts()

interface NftsProps {
  filter: string;
}

const Nfts = (props: NftsProps) => {
  const nfts = resource.read()
  console.log(nfts)

  const renderTodos = nfts.filter((nft: NFT) => nft.title.includes(props.filter)).map((nft: NFT) => {
    return (
      <Grid item key={nft.id} xs={12} sm={6} md={4}>
        <Card
          sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
        >
          <CardMedia
            component="img"
            image={nft.img}
          />
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography>{nft.title}</Typography>
              <Typography>{nft.price} SOL</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    )
  })

  return (
    <Container maxWidth="md">
      {renderTodos.length === 0 && <Typography align="center" color="text.secondary">No NFTs found</Typography>}
      <Grid container spacing={4}>
        <>{renderTodos}</>
      </Grid>
    </Container>
  )
}

export default Nfts
