import "./Contact.scss";

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      comment: formData.get("comment"),
    };

    try {
      const response = await fetch("https://beauty-shop-backend-k9oq.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__left">
        <h2 className="contact__heading">Contact us</h2>
        <p className="contact__text">
          We will help you choose a product that suits you and answer your other
          questions
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="E-Mail"
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              className="contact__input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="contact__form-group">
            <textarea
              className="contact__input"
              name="comment"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__form-button">
            Send a Message
          </button>
        </form>
      </div>

      <div className="contact__right">
        <img className="contact__img" src="contact-rose.png" alt="flower" />
      </div>
    </section>
  );
};
