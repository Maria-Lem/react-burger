export default function OrderNumber({ orderNum, color = "#FFFFFF" }) {
  const style = {
    color: color,
  };

  return (
    <p className={`text text_type_digits-default`} style={ style }>{orderNum}</p>
  );
}