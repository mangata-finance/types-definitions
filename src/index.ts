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
      description:
        "Calculates and returns sold_token_amount while providing bought_token_amount and respective reserves",
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
      description:
        "Calculates and returns bought_token_amount while providing sold_token_amount and respective reserves",
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
      description:
        "Returns amounts of tokens received by burning provided liquidity_token_amount in pool of provided token ids",
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
      description:
        "Same as calculate_sell_price, but providing token_id instead of reserves. Reserves are fetched by function.",
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
      description:
        "Same as calculate_buy_price, but providing token_id instead of reserves. Reserves are fetched by function.",
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
      description:
        "Calculate rewards amount of liquidity token id for the user",
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
      description:
        "Calculates how much amount x we need to swap from total_amount, so that after y = swap(x), the resulting balance equals (total_amount - x) / y = pool_x / pool_y - the resulting amounts can then be used to `mint_liquidity` with minimal leftover after operation",
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
      description: "Instant unreserve amount",
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
      type: "XYKRpcResult<Balance>"
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
      type: "Option<bool>"
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
      type: "Option<bool>"
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
