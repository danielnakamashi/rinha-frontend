import * as React from "react";
import { Json } from "./Json";
import type { JsonType } from "./Json";

type Props = {
  json: JsonType;
};

export const FilePage: React.FC<Props> = ({ json }) => {
  return (
    <>
      <header>
        <h1>file name</h1>
      </header>
      <main>
        <Json json={json} isValue={false} />
      </main>
    </>
  );
};
