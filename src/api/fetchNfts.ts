import wrapPromise from './wrapPromise'
import {ApiResponse, NFT} from "../common/types";

const NFT_LISTINGS_ENDPOINT = process.env.REACT_APP_NFT_LISTINGS_ENDPOINT;

function fetchNfts(): { read: () => NFT[] } {
  if (!NFT_LISTINGS_ENDPOINT) throw new Error('REACT_APP_NFT_LISTINGS_ENDPOINT not set')
  const promise = fetch(NFT_LISTINGS_ENDPOINT)
    .then(data => data.json())
    .then((apiResponse: ApiResponse) => apiResponse.results)

  return wrapPromise(promise)
}

export default fetchNfts
