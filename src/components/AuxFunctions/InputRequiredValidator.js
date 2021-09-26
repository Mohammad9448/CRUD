function InputRequiredValidator(value) {
  for(let i in value) {
      if(value[i].trim() === "")
      {
          return false;
      } 
      
  }
  return true;

}
export default InputRequiredValidator;