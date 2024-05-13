import { Brands } from "../brands";

export default function WorkWith() {
  return (
    <section>
      <div>
        <h2>Who we work with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button>About Us</button>
      </div>
      <Brands />
    </section>
  );
}
