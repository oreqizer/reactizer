/* @flow */
import withIntl from "client/services/intl/withIntl";
import { DEFAULT_TIME } from "client/services/intl/consts";

type Props = {
  time: Date,
  locale: string,
  format?: { [key: string]: number | string },
};

const Time = (props: Props) =>
  new Intl.DateTimeFormat(props.locale, props.format).format(props.time);

Time.defaultProps = {
  format: DEFAULT_TIME,
};

export default withIntl(Time);
