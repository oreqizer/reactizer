/* @flow */
import withIntl from "../services/intl/withIntl";

type Props = {
  value: number,
  locale: string,
  format?: { [key: string]: number | string },
};

const Num = (props: Props) => new Intl.NumberFormat(props.locale, props.format).format(props.value);

Num.defaultProps = {
  format: {},
};

export default withIntl(Num);
