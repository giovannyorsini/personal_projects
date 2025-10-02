// select all the control inputs
const inputs = document.querySelectorAll(".controls input");

// format correctly each input from the controls to CSS var()
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// set the eventListeners for updating the controls settings
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

// © Giovanny_Orsini
