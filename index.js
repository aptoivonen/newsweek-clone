const templates = document.querySelectorAll("template");
templates.forEach((template) => {
  const targets = template.dataset.targets.split(" ");
  let repeats = template.dataset.repeats
    .split(" ")
    .map((repeat) => Number.parseInt(repeat));
  targets.forEach((target, index) => {
    const targetEl = document.getElementById(target);
    const numberOfRepeats = repeats[index];
    if (numberOfRepeats && targetEl) {
      for (let i = 0; i < numberOfRepeats; i++)
        targetEl.appendChild(template.content.cloneNode(true));
    }
  });
});
