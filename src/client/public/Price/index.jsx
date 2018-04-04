/* @flow */
import withIntl from "../services/intl/withIntl";

type Props = {
  value: number,
  currency: string, // FIXME take from context when React 16.3 hits
  locale: string,
  format?: { [key: string]: number | string },
};

const Price = (props: Props) =>
  new Intl.NumberFormat(
    props.locale,
    Object.assign({ style: "currency", currency: props.currency }, props.format),
  ).format(props.value);

Price.defaultProps = {
  format: {},
};

export default withIntl(Price);
