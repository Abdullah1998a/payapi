const data = [
  {
    id: 1,
    title: "Our Vision",
    body: "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
  },
  {
    id: 2,
    title: "Our Business",
    body: "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
  },
];
export default function Vision() {
  return (
    <div>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
