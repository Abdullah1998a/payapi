import tesla from "../../assets/images/tesla.svg";
import microsoft from "../../assets/images/microsoft.svg";
import hewlettPackaed from "../../assets/images/hewlett-packard.svg";
import oracle from "../../assets/images/oracle.svg";
import google from "../../assets/images/google.svg";
import nvidia from "../../assets/images/nvidia.svg";

const logos = [
  {
    id: 1,
    icon: {
      src: tesla,
      alt: "tesla logo",
    },
  },
  {
    id: 2,
    icon: {
      src: microsoft,
      alt: "microsoft logo",
    },
  },
  {
    id: 3,
    icon: {
      src: hewlettPackaed,
      alt: "hewlett packaed logo",
    },
  },
  {
    id: 4,
    icon: {
      src: oracle,
      alt: "oracle logo",
    },
  },
  {
    id: 5,
    icon: {
      src: google,
      alt: "google logo",
    },
  },
  {
    id: 6,
    icon: {
      src: nvidia,
      alt: "nvidia logo",
    },
  },
];
export default function Brands() {
  return (
    <div>
      {logos.map(({ id, icon: { src, alt } }) => (
        <img src={src} alt={alt} key={id} />
      ))}
    </div>
  );
}
