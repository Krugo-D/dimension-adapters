import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

export default univ2Adapter({
  [CHAIN.AVAX]: "https://api.thegraph.com/subgraphs/name/billy93/swapsicleexc2",
}, {
  factoriesName: "factories",
  totalVolume: "volumeUSD",
  dayData: "dayData",
  dailyVolume: "volumeUSD"
});
