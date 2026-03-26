import "./Contact.css";

export default function Contact() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: "Steve Jobs"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
      author: "Steve Jobs"
    },
    {
      text: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Anonymous"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <section className="quotes-section">
        <h2>Motivational Quotes for Hard Work</h2>
        <div className="quotes-grid">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <blockquote className="quote-text">"{quote.text}"</blockquote>
              <cite className="quote-author">— {quote.author}</cite>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-details">
        <h2>Get In Touch</h2>
        <div className="contact-card">
          <div className="contact-info">
            <h3>Chandan Gupta</h3>
            <p><strong>Mobile:</strong> 752580XXXX</p>
            <p><strong>Email:</strong> contact@hinduswaraj.com</p>
            <p><strong>Address:</strong> India</p>
          </div>
          <div className="contact-image">
            <div className="placeholder-image">
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}