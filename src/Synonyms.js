import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return props.synonyms;
  } else {
    return null;
  }
}
