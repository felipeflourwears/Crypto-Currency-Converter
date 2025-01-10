import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptocurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        console.log("From FetchCryptos");
        const cryptocurrencies = await getCryptos();
        console.log("CryptoCurrencies: ", cryptocurrencies);

        set({ cryptocurrencies }); // Properly sets the data
    },
})));