document.addEventListener('DOMContentLoaded', function () {
  const bornDateInput = document.getElementById('born-date');
  const ageDisplay = document.getElementById('age-display');

  bornDateInput.addEventListener('input', function () {
    const bornDateValue = bornDateInput.value;

    if (bornDateValue) {
      const birthDate = new Date(bornDateValue);
      const currentDate = new Date();
      const diff = Math.abs(birthDate - currentDate);
      const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

      // const ageInMilliseconds = currentDate - birthDate;
      // const ageInSeconds = ageInMilliseconds / 1000;
      // const ageInYears = ageInSeconds / (60 * 60 * 24 * 365.25);

      ageDisplay.textContent = `${age} Anos`;
    } else {
      ageDisplay.textContent = '';
    }
  });
});