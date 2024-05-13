import { Plan } from "../plan";
import { pricingPlans } from "../../data/pricingPlans";

export default function Plans() {
  return (
    <div>
      {pricingPlans.map((plan) => (
        <Plan {...plan} key={plan.id} />
      ))}
    </div>
  );
}
