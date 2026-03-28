// ===== CONTACT FORM SUBMIT =====
    // Function: handleContactSubmit(e)
    // Purpose: Provide a polished booking confirmation experience when no backend URL is supplied
    // Triggers: Submit on the contact form
    function handleContactSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const name = form.full_name.value.trim();
      const phone = form.phone.value.trim();
      const shoot = form.type_of_shoot.value;
      const date = form.preferred_date.value;
      const message = `Thank you, ${name}. We’ve received your booking request for ${shoot} on ${date}. We’ll contact you at ${phone} shortly.`;
      alert(message);
      form.reset();
      return false;
    }