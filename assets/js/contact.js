const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const whatsappNumber = '2349022552931';

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hello Takfeef Travels, my name is ${name}. I am interested in ${service}. Email: ${email}. Phone: ${phone}. Message: ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  formMessage?.classList.add('show');
  window.open(url, '_blank', 'noopener');
});
