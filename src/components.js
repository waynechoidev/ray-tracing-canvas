export function inputRange(name, min, max, initial) {
  // min,  max, initial: number
  const component = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const value = document.createElement("span");
  component.appendChild(label);
  component.appendChild(input);
  component.appendChild(value);
  component.style = " display: flex;";
  label.innerHTML = `${name}: `;
  input.type = "range";
  input.min = min.toString();
  input.max = max.toString();
  input.value = initial.toString();
  value.innerHTML = ` (${initial.toString()})`;
  return component;
}
