import React from "react";

const ZineLink = ({ version, format, children }) => {
  const versionString = version + "-" + format;
  return (
    <a
      download={format === "print"}
      href={`/zines/Zine - How To Get Online in Seattle ${versionString}.pdf`}
    >
      {children}
    </a>
  );
};

export default ZineLink;
