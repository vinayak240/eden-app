import React from "react";
import PersonIcon from "../../../../../assets/icons/PersonIcon";
import TeamIcon from "../../../../../assets/icons/TeamIcon";
import "../styles/preference_form.css";

export default function PreferenceForm(props) {
  const { config, bindCallback, value, error } = props;
  const handlePrefrenceCLick = (id, value) => {
    bindCallback({ target: { id, value } });
  };
  return (
    <div style={{ width: "100%" }}>
      {error?.length > 0 && <p className="pref_validation">{error}</p>}
      <div className="pref_cntr">
        <div
          className="pref"
          style={{
            borderColor: value === "p1" ? "#5a4ad1" : "lightgray",
            borderWidth: value === "p1" ? "2px" : "1px",
          }}
          onClick={() => handlePrefrenceCLick(config?.id, "p1")}
        >
          <div>
            <PersonIcon color={value === "p1" ? "#5a4ad1" : "black"} />
          </div>
          <p className="pref_heading">For myself</p>
          <div className="pref_content">
            Write better. Think more clearly. Stay organized.
          </div>
        </div>
        <div
          className="pref"
          style={{
            borderColor: value === "p2" ? "#5a4ad1" : "lightgray",
            borderWidth: value === "p2" ? "2px" : "1px",
          }}
          onClick={() => handlePrefrenceCLick(config?.id, "p2")}
        >
          <div>
            <TeamIcon color={value === "p2" ? "#5a4ad1" : "black"} />
          </div>
          <p className="pref_heading">With my team</p>
          <div className="pref_content">
            Wikis, docs, tasks and projects, all in one place.
          </div>
        </div>
      </div>
    </div>
  );
}
