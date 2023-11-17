 import '../RadioGroup/radioGroup.css'
const RadioGroup = ()=>{
    return (
      <div class="radio-buttons">
          <h1 >Privacidad del post...</h1>
          <div>
        <label class="radio-button">
          <input type="radio" name="option" value="option1" />
          <div class="radio-circle"></div>
          <span class="radio-label">Público</span>
        </label>
        <label class="radio-button">
          <input type="radio" name="option" value="option2" />
          <div class="radio-circle"></div>
          <span class="radio-label">Privado</span>
        </label>
          </div>
      
      </div>
      
    )
}
export default RadioGroup
