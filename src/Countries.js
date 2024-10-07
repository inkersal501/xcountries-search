
function Countries({country}) {
 
  return (
    <div className="countryCard"> 
      <img src={country.flags.png} alt={country.name.common} style={{width:"100%",height:"125px"}}/>
      <p>{country.name.common}</p>
    </div>
  );
}

export default Countries;
