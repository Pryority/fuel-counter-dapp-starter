/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { FuelDappAbi, FuelDappAbiInterface } from "../FuelDappAbi";
const _abi = [
  {
    type: "function",
    name: "counter",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "increment",
    inputs: [
      {
        type: "u64",
        name: "param",
      },
    ],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
];

export class FuelDappAbi__factory {
  static readonly abi = _abi;
  static createInterface(): FuelDappAbiInterface {
    return new Interface(_abi) as unknown as FuelDappAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): FuelDappAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as FuelDappAbi;
  }
}
