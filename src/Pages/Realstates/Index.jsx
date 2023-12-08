import { useParams } from "react-router-dom";
import AyatRealestate from "./AyatRealestate";
const Realestate = () => {
  const param = useParams();

  return (
    <div>
      <AyatRealestate />
    </div>
  );
};
export default Realestate;
