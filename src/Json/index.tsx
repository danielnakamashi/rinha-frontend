import * as React from "react";
import { Inline } from "../layout/Inline";
import { Block } from "../layout/Block";

export type JsonType =
  | string
  | number
  | object
  | Array<unknown>
  | boolean
  | null;
type Props = {
  json: JsonType;
  isValue?: boolean;
};

enum JsonTypeEnum {
  String,
  Number,
  Object,
  Array,
  Boolean,
  Null,
}

function getJsonType(json: JsonType): JsonTypeEnum {
  if (typeof json === "boolean") {
    return JsonTypeEnum.Boolean;
  }
  if (typeof json === "number") {
    return JsonTypeEnum.Number;
  }
  if (typeof json === "string") {
    return JsonTypeEnum.String;
  }
  if (Array.isArray(json)) {
    return JsonTypeEnum.Array;
  }
  if (typeof json === "object") {
    return json === null ? JsonTypeEnum.Null : JsonTypeEnum.Object;
  }
}

export const Json: React.FC<Props> = ({ json, isValue = true }) => {
  const Element = isValue ? Inline : Block;

  if (json === null) {
    return <Element>null</Element>;
  }
  if (json === false) {
    return <Element>false</Element>;
  }
  if (json === true) {
    return <Element>true</Element>;
  }
  if (typeof json === "number") {
    return <Element>{json}</Element>;
  }
  if (typeof json === "string") {
    return <Element>{`"${json}"`}</Element>;
  }
  if (Array.isArray(json)) {
    return (
      <>
        <Element className="brackets">[</Element>
        <ul>
          {json.map((json, index) => (
            <Block key={index}>
              <Inline className="index">{index}</Inline>:&nbsp;
              <Json json={json} />
            </Block>
          ))}
        </ul>
        <Block className="brackets">]</Block>
      </>
    );
  }
  if (typeof json === "object") {
    if (json === null) {
      return <Element>null</Element>;
    }

    return (
      <ul>
        {Object.entries(json).map(([key, value]) => (
          <Block key={key}>
            <Inline className="key">{key}</Inline>:&nbsp;
            <Json json={value} />
          </Block>
        ))}
      </ul>
    );
  }

  console.log(json);
  throw new Error("json not identified");
};
