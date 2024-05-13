import iconCheck from "../../assets/images/icon-check.svg";

export default function Plan({ title, description, price, features }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <ul>
        {features.map(({ id, feature, isAvaliable }) => (
          <li key={id}>
            {isAvaliable && <img src={iconCheck} alt="icon check" />}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button>Request Access</button>
    </div>
  );
}
