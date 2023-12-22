type payloadType = { value: number };

export const CustomTooltip = ({
  payload,
  label,
  active,
}: {
  payload: payloadType[];
  label: string;
  active: boolean;
}) => {
  if (active) {
    return (
      <div className="bg-white p-2 rounded">
        <p>{label}</p>
        <p>${payload[0].value.toPrecision(7)}</p>
      </div>
    );
  }
  return null;
};
