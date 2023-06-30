import { OverrideBundleDefinition } from "@polkadot/types/types";

export const mTypes = {
  ShufflingSeed: {
    seed: "H256",
    proof: "H512"
  },
  Header: {
    parentHash: "Hash",
    number: "Compact<BlockNumber>",
    stateRoot: "Hash",
    extrinsicsRoot: "Hash",
    digest: "Digest",
    seed: "ShufflingSeed",
    count: "BlockNumber"
  },
  XYKRpcResult: {
    price: "Balance"
  },
  RPCAmountsResult: {
    firstAssetAmount: "Balance",
    secondAssetAmount: "Balance"
  },
  VestingInfo: {
    locked: "Balance",
    perBlock: "Balance",
    startingBlock: "BlockNumber"
  },
  TokenId: "u32",
  VestingInfosWithLockedAt: {
    vestingInfosWithLockedAt:
      "Vec<(VestingInfo<Balance, BlockNumber>, Balance)>"
  }
};

export const mRpc = {
  xyk: {
    calculate_buy_price: {
      description: "",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_sell_price: {
      description: "",
      params: [
        {
          name: "input_reserve",
          type: "Balance"
        },
        {
          name: "output_reserve",
          type: "Balance"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    get_burn_amount: {
      description: "",
      params: [
        {
          name: "first_asset_id",
          type: "TokenId"
        },
        {
          name: "second_asset_id",
          type: "TokenId"
        },
        {
          name: "liquidity_asset_amount",
          type: "Balance"
        }
      ],
      type: "RPCAmountsResult<Balance>"
    },
    calculate_sell_price_id: {
      description: "",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "sell_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_buy_price_id: {
      description: "",
      params: [
        {
          name: "sold_token_id",
          type: "TokenId"
        },
        {
          name: "bought_token_id",
          type: "TokenId"
        },
        {
          name: "buy_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_rewards_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    calculate_balanced_sell_amount: {
      description: "",
      params: [
        {
          name: "total_amount",
          type: "Balance"
        },
        {
          name: "reserve_amount",
          type: "Balance"
        }
      ],
      type: "XYKRpcResult<Balance>"
    },
    get_max_instant_unreserve_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    get_max_instant_burn_amount: {
      description: "",
      params: [
        {
          name: "user",
          type: "AccountId"
        },
        {
          name: "liquidity_asset_id",
          type: "TokenId"
        }
      ],
      type: "Balance"
    },
    is_sell_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokenId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "bool"
    },
    is_buy_asset_lock_free: {
      description: "",
      params: [
        {
          name: "path",
          type: "Vec<TokenId>"
        },
        {
          name: "input_amount",
          type: "Balance"
        }
      ],
      type: "bool"
    }
  },
  vesting: {
    getVestingLockedAt: {
      description: "",
      params: [
        {
          name: "who",
          type: "AccountId"
        },
        {
          name: "token_id",
          type: "TokenId"
        }
      ],
      type: "VestingInfosWithLockedAt<Balance, BlockNumber>"
    }
  }
};

export const mangataTypesBundleForPolkadotApps: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: mTypes
    }
  ],
  rpc: mRpc
};
