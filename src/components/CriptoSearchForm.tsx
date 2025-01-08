import { currencies } from "../data"

const CriptoSearchForm = () => {
  return (
    <form action="" className="form">
        <div className="field">
            <label htmlFor="currency">Currency: </label>
            <select name="currency" id="currency">
                <option value="" className="">-- Select --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="">Criptocurrency: </label>
            <select name="criptocurrency" id="criptocurrency">
                <option value="" className="">-- Select --</option>
            </select>
        </div>

        <input type="submit" value="Estimate"/>
    </form>
  )
}

export default CriptoSearchForm