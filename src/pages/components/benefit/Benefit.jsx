export default function Benefit({ img: { src, alt }, title, body }) {
  return (
    <div>
      <div>
        <img src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
