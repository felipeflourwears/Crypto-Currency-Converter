import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>[number];
export type Pair = z.infer<typeof PairSchema>
