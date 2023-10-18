import * as React from "react";

type Props = {
  setJson: React.Dispatch<React.SetStateAction<unknown | undefined>>;
};

export const HomePage: React.FC<Props> = ({ setJson }) => {
  const reader = React.useMemo(() => new FileReader(), []);
  const [isInvalidFile, setIsInvalidFile] = React.useState(false);

  React.useEffect(() => {
    const loadHandler = (e: ProgressEvent<FileReader>) => {
      if (!e.target) {
        return;
      }

      try {
        const json = JSON.parse(e.target.result as string);
        setIsInvalidFile(false);
        setJson(json);
      } catch (e) {
        setIsInvalidFile(true);
      }
    };
    reader.addEventListener("load", loadHandler);

    return () => {
      reader.removeEventListener("load", loadHandler);
    };
  }, [reader, setJson]);

  return (
    <>
      <h1>JSON Tree Viewer</h1>
      <p>Simple JSON Viewer that runs completely on-client. No data exchange</p>
      <input
        type="file"
        id="file"
        accept="application/json"
        onChange={(e) => {
          if (!e.target.files?.[0]) {
            return;
          }
          reader.readAsText(e.target.files?.[0]);
        }}
      />
      {isInvalidFile && <p>Invalid file. Please load a valid JSON file.</p>}
    </>
  );
};
