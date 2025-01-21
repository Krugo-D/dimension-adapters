import { Adapter, FetchOptions, } from '../../adapters/types';
import { CHAIN } from '../../helpers/chains';
import { addTokensReceived } from '../../helpers/token';

const totalFee = 10;

const methodology = {
    Fees: `${totalFee}% of the profit generated by the vaults is charged as a performance fee`,
    Revenue: `All fees are revenue`,
};

const token = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";
const target = "0x7C758F30892F2Ad7d7aE29f4A588Eab4DdD62E66";

const fetch = async (options: FetchOptions) => {
    const dailyFees = options.createBalances();
    const dailyRevenue = options.createBalances();
    const fees = await addTokensReceived({
        options: options,
        target: target,
        token: token
    });

    dailyFees.addBalances(fees);
    dailyRevenue.addBalances(fees);
    return { dailyFees, dailyRevenue }
}

const adapter: Adapter = {
    version: 2,
    adapter: {
        [CHAIN.ARBITRUM]: {
            fetch,
            meta: {
                methodology: methodology
            },
            start: '2024-11-01',
        },
    },
};

export default adapter;