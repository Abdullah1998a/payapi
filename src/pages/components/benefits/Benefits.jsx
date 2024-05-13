import { Benefit } from "../benefit";
import { benefits } from "../../data/benefits";

export default function Benefits() {
  return (
    <div>
      {benefits.map((benefit) => (
        <Benefit {...benefit} key={benefit.id} />
      ))}
    </div>
  );
}
