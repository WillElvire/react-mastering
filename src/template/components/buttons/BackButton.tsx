import {useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const BackButton = () => {
  const navigation = useNavigate();
  const backRedirection = ()=> {
    return navigation(-1);
  } 
  return (
    <div className="mt-3 ml-3">
      <Button onClick={backRedirection}> ◀️ Back</Button>
    </div>
  );
};
export default BackButton;
