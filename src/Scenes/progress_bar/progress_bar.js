import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Image from "../../utils/elements/Image";
import useLoadAsset from "../../utils/useLoadAsset";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { Assets } = useContext(SceneContext);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <Image
        src={Assets?.intro?.sprites[2]}
        alt="txt"
        className="progress_bar"
      />

      <div className="wrap_1" style={{ position: "fixed", right: "0%" }}>
        <Image
          src={num >= 1 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 1 ? "star" : ""}
        />
        <Image
          src={num >= 2 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 2 ? "star" : ""}
        />
        <Image
          src={num >= 3 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 3 ? "star" : ""}
        />
        <Image
          src={num >= 4 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 4 ? "star" : ""}
        />
        <Image
          src={num >= 5 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 5 ? "star" : ""}
        />
        <Image
          src={num >= 6 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 6 ? "star" : ""}
        />
        <Image
          src={num >= 7 ? Assets?.intro?.sprites[4] : Assets?.intro?.sprites[3]}
          alt="txt"
          id="stars"
          className={num === 7 ? "star" : ""}
        />
      </div>
    </>
  );
}
