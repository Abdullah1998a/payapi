export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <span></span>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <span></span>
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />
        <span></span>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <span></span>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <span></span>
      </div>
      <div>
        <input type="checkbox" name="announcement" id="announcement" />
        <label htmlFor="announcement">
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
