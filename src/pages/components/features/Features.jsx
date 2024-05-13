import { Feature } from "../feature";
import { features } from "../../data/features";

export default function Features() {
  return (
    <section>
      {features.map((feature) => (
        <Feature {...feature} key={feature.id} />
      ))}
    </section>
  );
}