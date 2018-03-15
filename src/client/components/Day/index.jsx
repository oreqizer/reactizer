/* @flow */
import withIntl from "client/services/intl/withIntl";
import { DEFAULT_DATE } from "client/services/intl/consts";

type Props = {
  date: Date,
  locale: string,
  format?: { [key: string]: number | string },
};

const Day = (props: Props) =>
  new Intl.DateTimeFormat(props.locale, props.format).format(props.date);

Day.defaultProps = {
  format: DEFAULT_DATE,
};

export default withIntl(Day);
