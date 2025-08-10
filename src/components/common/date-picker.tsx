import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
//@ts-ignore
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import Icon from "./icon";

interface Props {
  onDateChange: (dates: [startDate: Date, endDate: Date]) => void;
}

const CustomDatePicker: React.FC<Props> = ({ onDateChange }): JSX.Element => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [isOpen, setIsOpen] = useState(false);

  const [buttonState, setButtonState] = useState("normal");
  const onMouseEnter = () => setButtonState("hover");
  const onMouseLeave = () => setButtonState("normal");
  const onMouseDown = () => setButtonState("active");
  const onMouseUp = () => setButtonState("normal");

  let btnClass = "date-picker";

  if (buttonState === "hover") {
    btnClass = "date-picker-hover";
  } else if (buttonState === "active") {
    btnClass = "date-picker-active";
  }
  if (buttonState === "inactive") {
    btnClass = "date-picker-inactive";
  }
  const handleChange = (dates: [startDate: Date, endDate: Date]) => {
    onDateChange(dates);
    onChange(dates);
  };

  return (
    <div className="ml-2">
      <DateRangePicker
        onCalendarClose={() => setIsOpen(false)}
        onCalendarOpen={() => setIsOpen(true)}
        isOpen={isOpen}
        // @ts-ignore
        onChange={handleChange}
        value={value}
        calendarClassName="rounded-lg m-0 pt-6 pl-4 pb-14 pr-6"
        calendarIcon={
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            <FaRegCalendarAlt size={20} color="#d4fdf6" className="mr-2" />
            {isOpen ? (
              <Icon source="dropdown" size="sm" type="up" />
            ) : (
              <Icon source="dropdown" size="sm" type="down" />
            )}
          </div>
        }
        className={btnClass}
        clearIcon={null}
        maxDate={new Date()}
        input={false}
      />
    </div>
  );
};

export default CustomDatePicker;
