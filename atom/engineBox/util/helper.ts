import { decode } from "html-entities";
import _ from "lodash";

//jagaa start

export function toBoolean(x: any) {
  try {
    return !!JSON.parse(`${x}`.toLowerCase());
  } catch (e) {
    return !!x;
  }
}

export function positionToPath(obj: any) {
  let resultObj: any = {};
  obj.map(async (item: any) => {
    return (resultObj[item["positionname"]] = item);
  });
  return resultObj;
}

export function jsonParse(json: any, isDecode: boolean = false) {
  try {
    return JSON.parse(isDecode ? decode(json) : json);
  } catch (ex) {
    return {};
  }
}

//https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
// parentid array into children
export function parentidToChildren(
  arr: any,
  idfield: string = "id",
  parentidfield: string = "parentid"
) {
  let tree = [],
    mappedArr: any = {},
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  _.map(arr, (item, index) => {
    mappedArr[item[idfield]] = { ...item, children: [], isLeaf: true };
  });

  // console.log("mappedArr", mappedArr);

  // for (let x in mappedArr) {
  //   if (mappedArr.hasOwnProperty(x)) {
  //     mappedElem = mappedArr[x];
  //     // If the element is not at the root level, add it to its parent array of children.
  //     // console.log("mappedElem", mappedElem);
  //     if (
  //       mappedElem[parentidfield] &&
  //       mappedElem[parentidfield] !== "null" &&
  //       !_.isEmpty(mappedElem[parentidfield])
  //     ) {
  //       // console.log("RRRRRR", mappedElem[parentidfield]);
  //       // console.log("SSSS", mappedArr[mappedElem[parentidfield]]);
  //       // console.log("SSSS mappedElem", mappedElem);

  //       if (mappedArr[mappedElem[parentidfield]]) {
  //         mappedArr[mappedElem[parentidfield]]?.children.push(mappedElem);
  //         mappedArr[mappedElem[parentidfield]].isLeaf = false;
  //       }
  //     }
  //     // If the element is at the root level, add it to first level elements array.
  //     else {
  //       tree.push(mappedElem);
  //     }
  //   }
  // }

  for (let x in mappedArr) {
    if (mappedArr.hasOwnProperty(x)) {
      mappedElem = mappedArr[x];
      const parentId = mappedElem[parentidfield];

      // If the element has a parent, add it to its parent array of children.
      if (parentId && mappedArr[parentId]) {
        mappedArr[parentId].children.push(mappedElem);
        mappedArr[parentId].isLeaf = false;
      } else {
        // If the element is at the root level or its parent is not found, add it to the tree array.
        tree.push(mappedElem);
      }
    }
  }

  return tree;
}

//Бүх node-оор гүйж isOpen гэсэн element-ийг хэрвээ хүүхдэд байвал бүх эцгүүдэд онооно. Бусад эцгүүдэд isOpen=false олгоно.
// export function prepareIsOpen(
//   readyDatasrc,
//   selectedId,
//   positionConfig,
//   selectedIsOpen = false
// ) {
//   let newDatasrc = [...readyDatasrc];
//   let found = false;
//   readyDatasrc.map((item, index) => {
//     const selected =
//       selectedId === renderPositionType(item, "position0", positionConfig);

//     if (selected) {
//       newDatasrc[index].isOpen = selectedIsOpen; //selected node нь default-оор онгойх эсэх
//       found = true;
//     } else {
//       newDatasrc[index].isOpen = false;
//     }

//     if (item?.children) {
//       let sss = prepareIsOpen(
//         item?.children,
//         selectedId,
//         positionConfig,
//         selectedIsOpen
//       );
//       if (sss[1]) {
//         newDatasrc[index].isOpen = true;
//         found = true;
//       }
//     }
//   });

//   return [newDatasrc, found];
// }

// https://github.com/b4dnewz/string-template гэсэн сан байгаа.
// string дотор {str} байвал уг str-ийг объект дахь утгаар солино.
// url.path зам дээр "/devcloud/16342674214531?id={itemid}" гэсэн string ирнэ.
export function replaceTemplate(
  oldObject: any,
  Inputs: any,
  customParameters: any
) {
  if (_.isEmpty(oldObject) || !Object.keys(oldObject).length) return {};

  let oldObjectString = JSON.stringify(oldObject);
  let relVariable = oldObjectString.match(/\{[^\}]*\}/g);

  for (let index in relVariable) {
    for (var s in Inputs) {
      if (!_.isObject(Inputs[s])) {
        oldObjectString = oldObjectString.replace("{" + s + "}", Inputs[s]);
      }
    }
  }

  // let result =
  //   template(JSON.stringify(oldObject), Inputs, {
  //     pattern: "{%s}",
  //     ignoreErrors: true,
  //     ...customParameters,
  //   }) || "{}";

  let result = JSON.parse(oldObjectString);
  return result;
}

//jagaa end
