import React from "react";
import Image from "next/image";
import versusLogo from "../../public/versus.png";
import classes from "./GeneratedTeamsResult.styles";
import { useGlobalState } from "<src>/contexts/GlobalStateProvider";

export default function GeneratedTeamsResult() {
  const { filterResults } = useGlobalState();

  console.log({ filterResults });

  return (
    <div className={classes.generateTeamsWrapper}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/tr/5/52/FC.Porto.png" />
      </div>
      <Image src={versusLogo} alt="Picture of the author" className="versus" />
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Boavista_F.C._logo.svg/1200px-Boavista_F.C._logo.svg.png" />
      </div>
    </div>
  );
}
