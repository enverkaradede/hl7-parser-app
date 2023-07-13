const segmentSplitter = (hl7) => {
  return hl7.split("\n").filter((item) => item !== "");
};

export { segmentSplitter };
