document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  // Input elements
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");
  const queryType = document.getElementsByName("query-type");

  // Error message elements
  const firstNameError = document.getElementsByClassName("first-name-error");
  const lastNameError = document.getElementsByClassName("last-name-error");
  const emailError = document.getElementsByClassName("email-error");
  const invalidEmailError = document.getElementById("invalidEmail");
  const queryTypeError = document.getElementsByClassName("query-type-error");
  const messageError = document.getElementsByClassName("message-error");
  const consentError = document.getElementsByClassName("consent-error");

  // Success message elements
  const successMessageContainer = document.getElementsByClassName(
    "success-message-container"
  );

  // Hide error message and red border on input
  function hideErrorMessage(inputElement, errorElements) {
    inputElement.addEventListener("input", function () {
      if (inputElement.value.trim() !== "") {
        Array.from(errorElements).forEach((el) => el.classList.add("hidden"));
      }
    });

    // Change border color on focus
    inputElement.addEventListener("focus", function () {
      inputElement.style.borderColor = "rgba(12, 125, 105, 1)";
    });

    // Change border color on blur and show error if empty
    inputElement.addEventListener("blur", function () {
      if (inputElement.value.trim() === "") {
        inputElement.style.borderColor = "rgba(215, 60, 60, 1)";
        Array.from(errorElements).forEach((el) =>
          el.classList.remove("hidden")
        );
      } else {
        inputElement.style.borderColor = "rgba(43, 66, 70, 1)";
      }
    });
  }

  // Hide invalid email error on input
  function hideInvalidEmailError() {
    email.addEventListener("input", function () {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        invalidEmailError.classList.add("hidden");
      }
    });

    // Change border color on focus and blur
    email.addEventListener("focus", function () {
      email.style.borderColor = "rgba(12, 125, 105, 1)";
    });

    // Change border color on blur and validate email
    email.addEventListener("blur", function () {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = "rgba(215, 60, 60, 1)";
      } else {
        email.style.borderColor = "rgba(43, 66, 70, 1)";
      }
    });
  }

  // Attach event listeners to hide error messages on input
  hideErrorMessage(firstName, firstNameError);
  hideErrorMessage(lastName, lastNameError);
  hideErrorMessage(email, emailError);
  hideInvalidEmailError();
  hideErrorMessage(message, messageError);
  hideErrorMessage(consent, consentError);
  Array.from(queryType).forEach((el) => {
    el.addEventListener("change", function () {
      if (queryType[0].checked || queryType[1].checked) {
        Array.from(queryTypeError).forEach((el) => el.classList.add("hidden"));
      }
    });
  });

  // Styles for Query Type radio buttons
  Array.from(queryType).forEach((el) => {
    el.addEventListener("change", function () {
      if (queryType[0].checked) {
        document
          .getElementById("queryTypeGeneralInquiry")
          .classList.add("checked-query-type");
      } else {
        document
          .getElementById("queryTypeGeneralInquiry")
          .classList.remove("checked-query-type");
      }

      if (queryType[1].checked) {
        document
          .getElementById("queryTypeSupportRequest")
          .classList.add("checked-query-type");
      } else {
        document
          .getElementById("queryTypeSupportRequest")
          .classList.remove("checked-query-type");
      }
    });
  });

  // Reset error messages
  Array.from(firstNameError).forEach((el) => el.classList.add("hidden"));
  firstName.style.borderColor = "rgba(43, 66, 70, 1)"; // Reset border color

  Array.from(lastNameError).forEach((el) => el.classList.add("hidden"));
  lastName.style.borderColor = "rgba(43, 66, 70, 1)"; // Reset border color

  Array.from(emailError).forEach((el) => el.classList.add("hidden"));
  email.style.borderColor = "rgba(43, 66, 70, 1)"; // Reset border color

  invalidEmailError.classList.add("hidden");
  Array.from(messageError).forEach((el) => el.classList.add("hidden"));

  Array.from(queryTypeError).forEach((el) => el.classList.add("hidden"));
  message.style.borderColor = "rgba(43, 66, 70, 1)"; // Reset border color

  Array.from(consentError).forEach((el) => el.classList.add("hidden"));

  // Reset success messages
  Array.from(successMessageContainer).forEach((el) =>
    el.classList.add("hidden")
  );

  // Form submission event listener
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Validate first name
    if (firstName.value.trim() === "") {
      firstNameError[0].classList.remove("hidden");
      firstName.style.borderColor = "rgba(215, 60, 60, 1)";
      isValid = false;
    }

    // Validate last name
    if (lastName.value.trim() === "") {
      lastNameError[0].classList.remove("hidden");
      lastName.style.borderColor = "rgba(215, 60, 60, 1)";
      isValid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
      emailError[0].classList.remove("hidden");
      email.style.borderColor = "rgba(215, 60, 60, 1)";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      invalidEmailError.classList.remove("hidden");
      email.style.borderColor = "rgba(215, 60, 60, 1)";
      isValid = false;
    }

    // Validate query type
    if (!queryType[0].checked && !queryType[1].checked) {
      queryTypeError[0].classList.remove("hidden");
      isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
      messageError[0].classList.remove("hidden");
      message.style.borderColor = "rgba(215, 60, 60, 1)";
      isValid = false;
    }

    // Validate consent
    if (!consent.checked) {
      consentError[0].classList.remove("hidden");
      isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
      Array.from(successMessageContainer).forEach((el) =>
        el.classList.remove("hidden")
      );
      updateMargin();
    }

    // Reset success message after 3 seconds
    setTimeout(() => {
      Array.from(successMessageContainer).forEach((el) =>
        el.classList.add("hidden")
      );
      updateMargin();
      if (isValid === true) {
        contactForm.reset();
      }
    }, 3000);
  });

  // Setting margin of form container using media query
  function updateMargin() {
    const formContainer = document.getElementById("formContainer");

    const condition = Array.from(successMessageContainer).forEach((el) =>
      el.classList.contains("hidden")
    );

    const mediaQuery = window.matchMedia("max-Width:426px");

    if (condition && mediaQuery.matches) {
      formContainer.style.margin = "4rem 2rem";
    } else if (condition && !mediaQuery.matches) {
      formContainer.style.margin = "0 auto";
    } else if (!condition && mediaQuery.matches) {
      formContainer.style.margin = "0 2rem 4rem";
    } else {
      formContainer.style.margin = "auto";
    }
  }

  updateMargin();

  window.addEventListener("load", updateMargin);
  window.addEventListener("resize", updateMargin);
});
