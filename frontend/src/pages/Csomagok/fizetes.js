const Fizetes = ({
    bankSzamla,
    setBankSzamla,
    kartyaSzam,
    setKartyaSzam,
    lejáratiDatum,
    setLejáratiDatum,
    cvc,
    setCvc,
  }) => {
    return (
      <form>
        <label>Bankszámla szám:</label>
        <input type="text" value={bankSzamla} onChange={(e) => setBankSzamla(e.target.value)} />
        <label>Kártya szám:</label>
        <input type="text" value={kartyaSzam} onChange={(e) => setKartyaSzam(e.target.value)} />
        <label>Lejárati dátum:</label>
        <input type="date" value={lejáratiDatum} onChange={(e) => setLejáratiDatum(e.target.value)} />
        <label>CVC:</label>
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </form>
    );
  };