import React, { useEffect, useState } from "react";
import Filterjewel from "./Filterjewel";
import ALLjewels from "./ALLjewels";
import { allJweldata } from "../../utils/data/JwellData";
import { ringData } from "../../utils/data/ringData";
import { CiCircleChevRight } from "react-icons/ci";
import { neckData } from "../../utils/data/NeckData";
import { limitedData } from "../../utils/data/limitedData";
import { braceData } from "../../utils/data/braceletData";
import { earData } from "../../utils/data/earingData";
import { Link } from "react-router-dom";
import sampleimage from "../../Assets/Images/Earings/4.jpg";
import { fetchLink } from "../../utils/API/constant";
import Ringjewels from "./Ringjewels";

function JwelItems() { 

  return (
    <div>
      {/* <Ringjewels /> */}
      <ALLjewels/>
    </div>
  );
}

export default JwelItems;
