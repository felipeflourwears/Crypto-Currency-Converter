import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { useState } from "react"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchForm = () => {
    const cryptocurrencies = useCryptoStore((state)=> state.cryptocurrencies)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(Object.values(pair).includes('')){
            setError('All of the fileds are mandatory')
            return
        }
        setError('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Currency: </label>
                <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
                    <option value="" className="">-- Select --</option>
                    {currencies.map( currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="">Criptocurrency: </label>
                <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={pair.criptocurrency}>
                    <option value="" className="">-- Select --</option>
                    {
                        cryptocurrencies.map(crypto => (
                            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name} >{crypto.CoinInfo.FullName}</option>  
                        ))
                    }
                </select>
            </div>

            <input type="submit" value="Estimate"/>
        </form>
    )
}

export default CriptoSearchForm