import * as React from "react";
import { Json } from "./Json";
import type { JsonType } from "./Json";

type Props = {
  json: JsonType;
};

export const FilePage: React.FC<Props> = ({ json }) => {
  return (
    <>
      <h2>file name</h2>
      <code>
        <Json json={json} isValue={false} />
      </code>
    </>
  );
};
