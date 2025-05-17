import _ from "lodash";
import pupa from "pupa";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import { processCloudinaryImage } from "./imageHelper";

export function getColorTailwind(value: string) {
  return _.startsWith(value, "#") ? `[${value}]` : value;
}

export function toBoolean(x: any) {
  try {
    return !!JSON.parse(`${x}`.toLowerCase());
  } catch (e) {
    return !!x;
  }
}

export function twMergeUtil(config: any, ...args: any) {
  const result = useMemo(() => {
    let cooler = replaceTemplateV2(args.join(" "), config);

    if (_.includes(cooler, "{")) {
      cooler = replaceTemplateV2(cooler, config);
    }

    if (_.includes(cooler, "{")) {
      cooler = replaceTemplateV2(cooler, config);
    }

    return twMerge(cooler);
  }, [config, args]);

  return result;
}

export function replaceTemplateV2(
  originalObject = {},
  dataObject = {},
  option: any = {}
) {
  const optionReady = {
    transformTo: undefined, //undefined, //"", //null, undefined
    ...option,
    ignoreMissing: true, //Энийг хөдөлгөж болохгүй. Алдаа өгдөг болчихно.
  };

  const originalObjectReady = JSON.stringify(originalObject);
  const result = pupa(originalObjectReady, dataObject, {
    ignoreMissing: optionReady?.ignoreMissing,
    transform: (data) => {
      return data?.value || option?.transformTo;
    },
  });

  return JSON.parse(result);
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
    // parentSpanElement.innerHTML = "ssss";

    // You can also add content or other attributes to the span if needed
    // parentDivElement.appendChild(spanElement);
    const childrenSpanElement = document.createElement("i");
    childrenSpanElement?.classList?.add(
      "absolute",
      "bottom-5",
      "right-9",
      "fas",
      "fa-magnifying-glass",
      "text-gray-200",
      "opacity-70",
      "transform",
      "transition",
      "group-hover:scale-[1.5]",
      "cursor-pointer"
    );

    imgElement.parentNode.replaceChild(parentSpanElement, imgElement);
    parentSpanElement.appendChild(imgElement);
    parentSpanElement.appendChild(childrenSpanElement);
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

export function workingOnHTMLDetailCollapsibleH3_old({
  value,
}: {
  value: any;
}) {
  if (_.isEmpty(value)) return "";

  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = value;

  const h3Elements: any = tempContainer.getElementsByTagName("h3");

  _.map(h3Elements, (h3Element: any) => {
    const h3Text = h3Element.textContent || h3Element.innerText || "heading";
    const sanitizedId = _.kebabCase(h3Text);

    // h3-ыг
    // <input type="checkbox" id="section3-toggle" class="toggle-input">
    // <h3 class="toggle-header">
    //   <label for="section3-toggle">
    //     Гэрээний амьдралын мөчлөг:
    //   </label>
    // </h3>
    // болгож хувиргана.

    const checkboxId = `${sanitizedId}-toggle`;
    // Create the checkbox input element
    const checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", checkboxId);
    checkboxElement.classList.add("toggle-input");

    // Create a new label for the h3 element
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    // labelElement.innerText = h3Text;

    // Create an arrow span element
    const arrowElement = document.createElement("span");
    arrowElement.classList.add("toggle-arrow");
    // arrowElement.setAttribute("for", checkboxId);
    // arrowElement.innerHTML = `<i class="fas fa-chevron-right" for="${checkboxId}"></i>`;
    arrowElement.innerHTML = `<i class="fal fa-chevron-right"></i>`;

    // Append the arrow and text to the label
    labelElement.appendChild(arrowElement);
    labelElement.appendChild(document.createTextNode(h3Text));

    // Clear the original h3 element content
    h3Element.textContent = "";
    h3Element.classList.add("toggle-header");

    // Append the label to the h3 element
    // h3Element.appendChild(arrowElement);
    h3Element.appendChild(labelElement);
    h3Element.parentNode.insertBefore(checkboxElement, h3Element);
  });

  return tempContainer?.innerHTML;
}

// value-г боловсруулах function
export function renderAtomGetValue(item: any, atom: any, columnConfig: any) {
  let value =
    atom?.value ||
    _.get(item, "value", !_.isObject(item) && _.isString(item) ? item : "");

  if (
    columnConfig?.show_type === "decimal" &&
    !isNaN(value) &&
    value !== "-" &&
    !_.isEmpty(String(value)) &&
    _.isNumber(_.toNumber(value))
  ) {
    value = String(_.round(value, 2));
  }

  return value;
}

export const renderAtomAtomList: any = {
  title: "V2/AtomTitleV2",
  text: "V2/AtomTextV2",
  image: "V2/AtomImageV2",
  img: "V2/AtomImageV3",
  button: "V2/AtomButtonV2",
  currency: "V2/AtomCurrencyV2",
  tag: "V2/AtomTagV2",
  icon: "V2/AtomIconV2",
  number: "V2/AtomNumberV2",
  date: "V2/AtomDateV2",
  input: "V2/AtomInputV2",
  inputnumber: "V2/AtomInputNumberV2",
  inputimage: "V2/AtomInputImageV2",
  inputimagelist: "V2/AtomInputImageListV2",
  inputmask: "V2/AtomInputMaskV2",
  inputsegment: "V2/AtomInputSegmentV2",
  inputbutton: "V2/AtomInputButtonV2",
  inputswitch: "V2/AtomInputSwitchV2",
  inputcascader: "V2/AtomInputCascaderV2",
  textarea: "V2/AtomTextareaV2",
  select: "V2/AtomSelectV2",
  checkbox: "V2/AtomCheckboxV2",
  radio: "V2/AtomRadioV2",
  dropdown: "V2/AtomDropdownV2",
  editor: "V2/AtomEditorV2",
  // editor: "V2/AtomEditorV3",
  editor2: "V2/AtomEditorV3",
  multicombo: "V2/AtomSelectV2",
  imagemagnify: "V2/AtomImageMagnifyV2",
  jsonview: "V2/AtomJsonViewV2",
  jsoneditor: "V2/AtomJsonEditorV2",
  avatar: "V2/AtomAvatarV2",
  line: "V2/AtomLineV2",
  forminput: "HookForm/AtomFormInputV2",
  forminputerror: "HookForm/AtomInputErrorTextV2",
  htmltext: "V2/AtomHtmlText",
  clob: "V2/AtomClobV2",
  video: "V2/AtomVideoV2",
};
