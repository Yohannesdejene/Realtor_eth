import { useParams } from "react-router-dom";
import AyatRealestate from "./AyatRealestate";
import GiftRealestate from "./GiftRealestate";
import PhisonRealestate from "./PhisonRealestate";
import JamboRealestate from "./JamboRealestate";
import NoahRealestate from "./NoahRealestate";
import NotFound from "../NotFound";
const Realestate = () => {
  const param = useParams();
  console.log("realestststst", param.realestateName);

  const Real = () => {
    switch (param.realestateName) {
      case "ayat_realestate":
        return <AyatRealestate />;
      case "gift_realestate":
        return <GiftRealestate />;
      case "phison_realestate":
        return <PhisonRealestate />;
      case "noah_realestate":
        return <NoahRealestate />;
      case "jambo_realestate":
        return <JamboRealestate />;
      default:
        return <NotFound />;
    }
  };

  return <Real />;
};
export default Realestate;
