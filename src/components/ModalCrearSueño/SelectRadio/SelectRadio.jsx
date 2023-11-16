 import '../SelectRadio/selectRadio.css'
const SelectRadio = () => {
    return (
      <div className="radio-input">
        <h1 style={{fontSize:"15px"}}>Privacidad de tu publicacion...</h1>
        <div style={{display:"flex", flexDirection:"row"}}>
        <input value="value-1" name="value-radio" id="value-1" type="radio" />
        <label htmlFor="value-1">Público</label>
        <input value="value-2" name="value-radio" id="value-2" type="radio" />
        <label htmlFor="value-2">Privado</label>
        </div>
      </div>
    );
  };
  
  export default SelectRadio