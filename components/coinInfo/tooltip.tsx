export function CustomTooltip({
  payload,
  label,
  active,
}: {
  payload: number;
  label: string;
  active: boolean;
}) {
  if (active) {
    return (
      <div>
        <p>{label}</p>
        <p>${payload}</p>
      </div>
    );
  }
  return null;
}
