import wrapPromise from './wrapPromise'
import {ApiResponse, NFT} from "../common/types";

const NFT_LISTINGS_ENDPOINT = "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=10000&offset=0";

function fetchNfts(): { read: () => NFT[] } {
  const promise = fetch(NFT_LISTINGS_ENDPOINT)
    .then(data => data.json())
    .then((apiResponse: ApiResponse) => apiResponse.results)

  return wrapPromise(promise)
}

export default fetchNfts
