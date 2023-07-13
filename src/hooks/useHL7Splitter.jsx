import { useSelector } from "react-redux";
import { segmentSplitter } from "../utils/pure/segmentSplitter";
import { fieldSplitter } from "../utils/pure/fieldSplitter";
import { setMessageType } from "../utils/slicers/Hl7MessageSlicer";
import { useDispatch } from "react-redux";

const useHL7Splitter = () => {
  const hl7 = useSelector((state) => state.hl7);
  let messageType = "";

  if (hl7 === {}) messageType = "";

  const dispatch = useDispatch();
  const segmentedMessage = segmentSplitter(hl7.message);

  const splitMessageArr = segmentedMessage.map((segment) => {
    const segmentArr = fieldSplitter(segment);

    if (segment.includes("MSH")) {
      segmentArr.splice(1, 0, "|");
      messageType = segmentArr[9];
    }

    return segmentArr;
  });
  dispatch(setMessageType(messageType));

  return { splitMessageArr };
};

export { useHL7Splitter };
