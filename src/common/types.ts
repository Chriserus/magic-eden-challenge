export interface ApiResponse {
  nextCursor: string;
  results: NFT[];
}

export interface NFT {
  mintAddress: string;
  supply: number;
  title: string;
  primarySaleHappened: boolean;
  updateAuthority: string;
  onChainCollection: {
    key: string;
    verified: number;
    data: {
      name: string;
      image: string;
      description: string;
    }
  }
  sellerFeeBasisPoints: number;
  creators: {
    address: string;
    verified: number;
    share: number;
  }[],
  price: number;
  escrowPubkey: string;
  owner: string;
  v2: {
    auctionHouseKey: string;
    sellerReferral: string;
    expiry: number;
  }
  id: string;
  tokenDelegateValid: boolean;
  isFrozen: boolean;
  tokenStandard: number;
  mip1State: number;
  img: string;
  attributes: {
    trait_type: string;
    value: string;
  }[],
  externalURL: string;
  content: string;
  collectionName: string;
  collectionTitle: string;
  isTradeable: boolean;
  rarity: {
    howrare: {
      rank: number;
    },
    moonrank: {
      rank: number;
      absolute_rarity: number;
      crawl: {}
    }
  }
  listingType: string;
  listingUpdatedAt: {
    updatedAt: string;
    slot: number;
  }
  lastSalePriceWithFees: number;
  createdAt: string;
  updatedAt: string;
}
