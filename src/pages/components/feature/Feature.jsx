export default function Feature({ img: { src, alt }, body }) {
  return (
    <div>
      <div>
        <img src={src} alt={alt} />
      </div>
      <p>{body}</p>
    </div>
  );
}
