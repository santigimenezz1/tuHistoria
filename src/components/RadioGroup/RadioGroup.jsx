 import '../RadioGroup/radioGroup.css'
const RadioGroup = ()=>{
    return (
        <div class="radio-buttons">
        <label class="radio-button">
          <input type="radio" name="option" value="option1" />
          <div class="radio-circle"></div>
          <span class="radio-label">Option 1</span>
        </label>
        <label class="radio-button">
          <input type="radio" name="option" value="option2" />
          <div class="radio-circle"></div>
          <span class="radio-label">Option 2</span>
        </label>
        <label class="radio-button">
          <input type="radio" name="option" value="option3" />
          <div class="radio-circle"></div>
          <span class="radio-label">Option 3</span>
        </label>
      </div>
      
    )
}
export default RadioGroup
