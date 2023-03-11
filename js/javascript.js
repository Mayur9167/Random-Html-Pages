

  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const dob = document.querySelector('#dob').value;
	const gender =document.querySelector('input[name="gender"]:checked').value;
    const address = document.querySelector('#address').value;
    const country = document.querySelector('#country').value;
    const course = document.querySelector('#course').value;
    const semester = document.querySelector('#semester').value;
    const roll = document.querySelector('#roll').value;

    const formData = {
      name,
      email,
      phone,
      dob,
      gender,
      address,
      country,
      course,
      semester,
      roll,
    };


    localStorage.setItem('formData', JSON.stringify(formData));

    window.location.href = 'success.html';
  });

