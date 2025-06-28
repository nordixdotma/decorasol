export default function GoogleMap() {
  return (
    <div className="w-full h-[350px] md:h-[500px] overflow-hidden md:rounded-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108657.32848917472!2d-8.191337302734373!3d31.673761099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafede9912205fb%3A0xcc1edd822158ee46!2sDECO%20DARI!5e0!3m2!1sen!2sma!4v1747725145097!5m2!1sen!2sma"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DECO DARI Location"
      ></iframe>
    </div>
  )
}
