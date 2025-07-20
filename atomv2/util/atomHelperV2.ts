import clsx from "clsx";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import { processCloudinaryImage } from "./imagehelper";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function workingOnHTMLLightBoxItems({ value }: { value: any }) {
  if (_.isEmpty(value)) return "";

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = value;

  const imgElements: any = tempContainer.getElementsByTagName("img");

  for (let i = 0; i < imgElements.length; i++) {
    const imgElement = imgElements[i];

    imgElement?.classList?.add(
      "cursor-pointer",
      "transform",
      "transition",
      "hover:scale-[1.01]",
      "w-[500px]"
    );

    imgElement.src = processCloudinaryImage(
      imgElement?.src,
      `w_500` //w_200,h_150,c_scale гэх мэтээр өгч болно.
    );

    // Create a <span> element
    const parentSpanElement = document.createElement("span");
    parentSpanElement?.classList?.add("img-wrapper-span", "group");

    // You can also add content or other attributes to the span if needed
    const iconElement = document.createElement("i");
    iconElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-width="1.5"><circle cx="11.5" cy="11.5" r="9.5"/><path stroke-linecap="round" d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"/></g></svg>`;
    iconElement.classList.add(
      "absolute",
      "bottom-2",
      "right-7",
      "text-gray-200",
      "opacity-70",
      "transform",
      "transition",
      "group-hover:scale-[1.2]",
      "cursor-pointer"
    );

    imgElement.parentNode.replaceChild(parentSpanElement, imgElement);
    parentSpanElement.appendChild(imgElement);
    parentSpanElement.appendChild(iconElement);
  }

  return tempContainer?.innerHTML;
  /* -------------------- end of image -------------------- */
}

export function workingOnHTMLDetailHeadingH3({ value }: { value: any }) {
  if (_.isEmpty(value)) return "";

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = value;

  const h3Elements: any = tempContainer.getElementsByTagName("h3");
  const headingList: any[] = [];

  _.map(h3Elements, (h3Element: any) => {
    const h3Text = h3Element.textContent || h3Element.innerText || "heading";
    const sanitizedId = `${_.kebabCase(h3Text)}-${uuidv4()}`;
    // const sanitizedId = uuidv4();
    h3Element.setAttribute("id", sanitizedId);

    headingList.push({ title: h3Text, value: sanitizedId });
  });

  return { resultHtml: tempContainer?.innerHTML, headingList };
}

export function workingOnHTMLDetailCollapsibleH3({ value }: { value: any }) {
  if (_.isEmpty(value)) return "";

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = value;

  const h3Elements: any = tempContainer.getElementsByTagName("h3");

  _.map(h3Elements, (h3Element: any) => {
    const h3Text = h3Element.textContent || h3Element.innerText || "heading";
    const sanitizedId = _.kebabCase(h3Text);
    const checkboxId = `${sanitizedId}-toggle-${uuidv4()}`;

    // Create the checkbox input element
    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", checkboxId);
    checkboxElement.classList.add("toggle-input");

    // Create a new label for the h3 element
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);

    // Create an arrow span element
    const arrowElement = document.createElement("span");
    arrowElement.classList.add("toggle-arrow");
    arrowElement.innerHTML = `<i class="fal fa-chevron-right"></i>`;

    // Append the arrow and text to the label
    labelElement.appendChild(arrowElement);
    labelElement.appendChild(document.createTextNode(h3Text));

    // Clear the original h3 element content and append the label
    h3Element.textContent = "";
    h3Element.classList.add("toggle-header");
    h3Element.appendChild(labelElement);

    // Insert the checkbox before the h3 element
    h3Element.parentNode.insertBefore(checkboxElement, h3Element);

    // Create a div with class toggle-body to wrap content until the next h3
    const toggleBodyDiv = document.createElement("div");
    toggleBodyDiv.classList.add("toggle-body");

    // Collect all the elements until the next h3
    let sibling = h3Element.nextSibling;
    while (sibling && sibling.tagName !== "H3") {
      const nextSibling = sibling.nextSibling; // Store the next sibling before moving it
      toggleBodyDiv.appendChild(sibling); // Move the sibling into the toggleBodyDiv
      sibling = nextSibling;
    }

    // Insert the toggle-body div after the current h3
    h3Element.parentNode.insertBefore(toggleBodyDiv, sibling);
  });

  return tempContainer?.innerHTML;
}

export function workingOnHTMLDetailCollapsible({ value }: { value: any }) {
  if (_.isEmpty(value)) return "";

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = value;

  // Find all moto-carousel-header elements
  const headerElements: any = tempContainer.getElementsByClassName(
    "moto-carousel-header"
  );

  _.map(headerElements, (headerElement: any) => {
    const headerText =
      headerElement.textContent || headerElement.innerText || "heading";
    const sanitizedId = _.kebabCase(headerText);
    const checkboxId = `${sanitizedId}-toggle-${uuidv4()}`;

    // Create the checkbox input element
    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", checkboxId);
    checkboxElement.classList.add("toggle-input");

    // Create a new label for the header element
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);

    // Create an arrow span element
    const arrowElement = document.createElement("span");
    arrowElement.classList.add("toggle-arrow");
    arrowElement.innerHTML = `<i class="fal fa-chevron-right"></i>`;

    // Append the arrow and text to the label
    labelElement.appendChild(arrowElement);
    labelElement.appendChild(document.createTextNode(headerText));

    // Clear the original header element content and append the label
    headerElement.textContent = "";
    headerElement.classList.add("toggle-header");
    headerElement.appendChild(labelElement);

    // Insert the checkbox before the header element
    headerElement.parentNode.insertBefore(checkboxElement, headerElement);

    // Find the corresponding moto-carousel-body
    const bodyElement = headerElement.nextElementSibling;

    if (bodyElement && bodyElement.classList.contains("moto-carousel-body")) {
      // Wrap the moto-carousel-body in a div with class toggle-body
      const toggleBodyDiv = document.createElement("div");
      toggleBodyDiv.classList.add("toggle-body");
      bodyElement.parentNode.insertBefore(toggleBodyDiv, bodyElement);
      toggleBodyDiv.appendChild(bodyElement);
    }
  });

  return tempContainer?.innerHTML;
}
