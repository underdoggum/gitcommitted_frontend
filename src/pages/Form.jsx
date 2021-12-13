import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";


const Form = ({ initialReminders, handleSubmit, buttonLabel }) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = parseInt(params.id);
  
  const [formData, setFormData] = useState(initialReminders);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value, category: id });
  }

  const handleSubmission = event => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/timeblocks")
    // Note: "formData.category" below returns "NaN" when trying to route back to relevant timeblock category page
    // navigate("/timeblocks/" + formData.category);
  }

  return(
    <form onSubmit={handleSubmission}>
      <input
        type="hidden"
        value={id}
        name="category"
      />
      <input
        type="text"
        onChange={handleChange}  
        value={formData.text}
        name="text"
      />
      <Button><input type="submit" value={buttonLabel} /></Button>
    </form>
  )
}


export default Form;
