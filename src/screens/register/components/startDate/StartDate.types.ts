export type StartDateToDateType = (
  onChange: StartDateType
) => (date: Date | undefined) => void;

export type StartDateToStartDate = (onChange: StartDateType) => StartDateType;

type StartDateType = (startDate: string | undefined) => void;
