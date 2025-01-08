import { create } from 'zustand'
import axios from 'axios'
import { CryptoCurrencyResponseSchema } from './schema/crypto-schema'
import { CryptoCurrency } from './types'

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    console.log("Data: " , Data)
    const result = CryptoCurrencyResponseSchema.safeParse(Data)
    console.log("Result: ", result)
    if(result.success){
        return result.data
    }
}

export const useCryptoStore = create<CryptoStore>((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        console.log("From FetchCryptos");
        const cryptocurrencies = await getCryptos();
        console.log("CryptoCurrencies: ", cryptocurrencies);

        set({ cryptocurrencies }); // Properly sets the data
    },
}));