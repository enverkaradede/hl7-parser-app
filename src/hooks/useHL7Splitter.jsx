import { useSelector, useDispatch } from "react-redux";
import { segmentSplitter } from "../utils/pure/segmentSplitter";
import { fieldSplitter } from "../utils/pure/fieldSplitter";
import { setMessageType } from "../utils/store/slicers/Hl7MessageSlicer";
import segmentInfoArr from "../utils/store/dictionaries/segment_dictionary";
import fieldInfoArr from "../utils/store/dictionaries/field_dictionary";

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

  const detailedFieldArr = splitMessageArr.map((segment, segmentIndex) => {
    const segmentName = segment[0];

    return segment.map((field, fieldIndex) => {
      if (field === "" || fieldIndex === 0) return;
      const fieldIndicator = `${segmentName}.${fieldIndex}`;

      const fieldName = Object.values(
        fieldInfoArr[segmentName][fieldIndicator]
      );
      return (field = [fieldIndicator, field, ...fieldName]);
    });
  });

  return { detailedFieldArr };
};

export { useHL7Splitter };
