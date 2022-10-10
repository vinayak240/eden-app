import React, { useEffect, useRef } from "react";
import "../../../../shared/GenericForm/styles/form.css";
import check_animation from "../../../../../assets/lotties/check_animation.json";
import lottie from "lottie-web";
import { STORAGE_KEY } from "../../../../constants";

export default function Completed(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    lottie.destroy();
    lottie.loadAnimation({
      container: containerRef.current,
      animationData: check_animation,
      renderer: "svg",
      loop: false,
      autoplay: true,
    });
  }, []);

  return (
    <div className="completed_cntr">
      <div className="check_animation" ref={containerRef}></div>
      <p style={{ marginTop: "1.3rem" }} className="form_heading">
        Congratulations,{" "}
        {
          JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "{}"
          )?.[1]?.full_name?.split(" ")?.[0]
        }
      </p>
      <p className="form_caption">
        You have completed onboarding, You can start using Eden!
      </p>
      <button className="submit_btn">Launch Eden</button>
    </div>
  );
}
