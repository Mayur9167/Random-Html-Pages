
  // Get the form data from local storage
  const formData = JSON.parse(localStorage.getItem('formData'));

  // Get the HTML elements to display the form data
  const nameElem = document.querySelector('#name');
  const emailElem = document.querySelector('#email');
  const phoneElem = document.querySelector('#phone');
  const dobElem = document.querySelector('#dob');
  const genderElem = document.querySelector('#gender');
  const addressElem = document.querySelector('#address');
  const countryElem = document.querySelector('#country');
  const courseElem = document.querySelector('#course');
  const semesterElem = document.querySelector('#semester');
  const rollElem = document.querySelector('#roll');

  // Display the form data in the HTML elements
  nameElem.textContent = formData.name;
  emailElem.textContent = formData.email;
  phoneElem.textContent = formData.phone;
  dobElem.textContent = formData.dob;
  genderElem.textContent = formData.gender;
  addressElem.textContent = formData.address;
  countryElem.textContent = formData.country;
  courseElem.textContent = formData.course;
  semesterElem.textContent = formData.semester;
  rollElem.textContent = formData.roll;

  // Clear the form data from local storage
  localStorage.removeItem('formData');

