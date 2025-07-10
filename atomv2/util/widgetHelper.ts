import { formatMoney } from "accounting";
import { decode, encode } from "html-entities";
import _, { reduce } from "lodash";
import pupa from "pupa";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import dayjs from "./dayjslocale";
import { parse, converter } from "culori";

export function jsonParse(json: any, isDecode: boolean = false) {
  try {
    return JSON.parse(isDecode ? decode(json) : json);
  } catch (ex) {
    return {};
  }
}

export function toBoolean(x: any) {
  try {
    return !!JSON.parse(`${x}`.toLowerCase());
  } catch (e) {
    return !!x;
  }
}

export function preparePositionAllArray(list: any, positionConfig: any) {
  const result: any = _.map(list, (item) => {
    const myItem = _.isArray(item)
      ? preparePositionAllArray(item, positionConfig)
      : item;

    return preparePositions(myItem, positionConfig);
  });

  return result;
}

//readyDatasrc бэлтгэх функц
//datasrc дээр position-уудыг нь шууд нэмж өгье.
export function preparePositions(item: any, positionConfig: any) {
  let standardPositionMap = [
    { 0: "id" },
    { 1: "title" },
    { 2: "mainimage" },
    { 3: "description" },
    { 4: "mainnumber" },
    { 5: "createddate" },
    { 6: "modifieddate" },
    { 7: "isfeatured" },
    { 8: "isactive" },
    { 9: "more" },
    { 10: "button" },
    { 11: "code" },
    { 20: "parentid" },
    { 21: "metaid" },
    { 22: "body" },
    { 23: "price2" },
    { 24: "imagelist" },
    { 25: "block1classname" },
    { 26: "block1style" },
    { 27: "block2classname" },
    { 28: "block3style" },
    { 29: "slug" },
    { 30: "clob" },
    { 31: "speclist" },
    { 32: "speclist2" },
    { 33: "columnnamelist" },
    { 34: "rating" },
    { 35: "ordernumber" },
    { 40: "subtitle" },
    { 41: "category" },
    { 42: "taglist" },
    { 43: "owner" },
    { 44: "owner2" },
    { 45: "link" },
    { 46: "link2" },
    { 47: "subnumber" },
    { 48: "tooltip" },
    { 49: "icon" },
    { 50: "icon2" },
    { 51: "status" },
    { 52: "wallpaper" },
    { 53: "groupname" },
    { 54: "placeholder" },
    { 55: "companyname" },
    { 56: "brandname" },
    { 57: "thumblarge" },
    { 58: "thumbmedium" },
    { 59: "thumbsmall" },
    { 60: "type" },
    { 61: "logo" },
    { 70: "onclick" },
    { 71: "onchange" },
    { 72: "onhover" },
    { 80: "countList" },
    { 81: "commentcount" },
    { 82: "likeCount" },
    { 83: "count" },
    { 85: "modal" },
    { 86: "issolved" },
    { 87: "createdusername" },
  ];

  //дээдэхийг доодох шиг объект болгох ёстой.
  // {
  //   position0: {
  //     positionname: "position0",
  //     fieldpath: "id",
  //   },
  //   position1: {
  //     positionname: "position1",
  //     fieldpath: "title",
  //   },
  //   position2: {
  //     positionname: "position2",
  //     fieldpath: "mainimage",
  //   },
  //   position3: {
  //     positionname: "position3",
  //     fieldpath: "description",
  //   },
  //   position4: {
  //     positionname: "position4",
  //     fieldpath: "mainnumber",
  //   },
  // };

  let standardWidgetPositionMap = {};
  _.keys(standardPositionMap).map((_key, index) => {
    const object: any = standardPositionMap[index];
    const myKey = _.keys(object)[0];
    const myValue = object[myKey];

    standardWidgetPositionMap = {
      ...standardWidgetPositionMap,
      [`position${myKey}`]: {
        positionname: `position${myKey}`,
        fieldpath: myValue,
      },
    };
  });

  const myPositionConfig = {
    ...standardWidgetPositionMap, //стандарт байрлалуудыг нэмж өгөв.
    ...positionConfig, //widgetNemgoo-оос ирсэн position-ууд
  };
  // console.log("🚀 ~ preparePositions ~ myPositionConfig", myPositionConfig);

  let newItem = { ...item };
  _.values(myPositionConfig).map((itemPosition) => {
    // if (item[_.toLower(itemPosition.fieldpath)] !== undefined) {
    if (item[itemPosition.fieldpath] !== undefined) {
      //цаанаас true, false гэсэн утга бас ирдэг. Иймээс оршин байгаа эсэхийг л шалгана.
      const positionnemgooReady = replaceTemplateV2(
        itemPosition.positionnemgooReady,
        item
      );

      newItem[itemPosition.positionname] = {
        // value: item[_.toLower(itemPosition.fieldpath)],
        // classname: item[_.toLower(`${itemPosition.fieldpath}-classname`)],
        value: item[itemPosition.fieldpath],
        classname: item[`${itemPosition.fieldpath}-classname`],
        positionnemgoo: positionnemgooReady,
        positionnemgooReady: positionnemgooReady,
        rawConfig: {
          ...itemPosition,
        },
        pathname: itemPosition.fieldpath,
      };
    }
  });
  // console.log("🚀 ~ preparePositions ~ newItem", newItem);

  // if (item.title === "Тансаг") {
  //   console.log("myPositionConfig", myPositionConfig);
  //   console.log("item", item);
  // }

  //filter-д ирдэг утгууд нь filternemgoo-той байдаг. cozyFilterList_c009 гэсэн процесст ирдэг утгууд юм. Cozy-ийн Filter-т ашиглав.
  if (newItem?.filternemgoo) {
    newItem.filternemgooReady = jsonParse(newItem.filternemgoo);
  }

  //filter-ийн value-д ирдэг утгууд нь valuernemgoo-той байдаг. cozyFilterList_c009 гэсэн процесст ирдэг утгууд юм. Cozy-ийн Filter-т ашиглав.
  if (newItem?.valuenemgoo) {
    newItem.valuenemgoorReady = jsonParse(newItem.valuenemgoo);
  }

  //value_rows дотор байгаа зүйлсийг Array болгоод ordernumber-аар sort-лов.
  if (newItem?.value_rows) {
    newItem.rowsReady = _.orderBy(
      _.values(newItem?.value_rows),
      "ordernumber"
    ).map((item) => {
      return preparePositions(item, null);
    });
  }

  return newItem;
}

export function prepareNemgooReady(list: any) {
  const result = _.map(list, (item) => {
    return {
      ...item,
      nemgooReady: {
        ...jsonParse(item?.nemgoo, true),
        ...item?.json,
      },
    };
  });
  return result;
}

// widget debug функц
export function runWidgetDebug(
  widgetnemgooReady: any,
  config: any,
  readyDatasrc: any
) {
  if (widgetnemgooReady?.debug) {
    const myConsole = widgetnemgooReady.debug?.console || {};

    if (
      !toBoolean(myConsole?.data) &&
      !toBoolean(myConsole?.config) &&
      !toBoolean(myConsole?.nemgoo)
    )
      return null;

    const consoleCssHeader = "font-weight: bold";
    const consoleCssData = "background: #093145; color: #ffffff";
    const consoleCssConfig = "background: #107896; color: #f5f5f5";
    const consoleCssNemgoo = "background: #829356; color: #ffffff";

    // console.log("debug myConsole", myConsole);
    const consoleHeader = _.filter([
      config.id,
      config.widgetcode,
      config.metadatacode,
    ]).join(" | ");

    // console.log(
    //   `\n Debug ======  %c ${consoleHeader}  ==============`,
    //   consoleCssHeader
    // );

    console.log(
      `\n\n Debug ======  %c ${consoleHeader}  ==============`,
      consoleCssHeader
    );

    if (toBoolean(myConsole?.data)) {
      console.log(`%c DATA   `, consoleCssData, readyDatasrc);
    }
    if (toBoolean(myConsole?.config)) {
      console.log(`%c CONFIG `, consoleCssConfig, config);
    }
    if (toBoolean(myConsole?.nemgoo)) {
      console.log(`%c NEMGOO `, consoleCssNemgoo, widgetnemgooReady);
    }

    console.log("\n");
  }
  return null;
}
export function prepareWidgetDefaultClasses(
  widgetnemgooReady: any,
  widgetAllaround: any
) {
  const divouterblockClassName = `${
    toBoolean(widgetnemgooReady?.isDefaultTheme)
      ? widgetAllaround?.divouterblock?.className
        ? widgetAllaround?.divouterblock?.className
        : "w-full h-full overflow-hidden rounded-md"
      : ""
  } ${
    widgetnemgooReady?.design?.className || widgetnemgooReady?.className || ""
  }`;

  const divouterblockStyle = {
    ...(widgetnemgooReady?.design?.style || widgetnemgooReady?.style),
    ...widgetAllaround?.divouterblock?.style,
  };

  const divinsideblockClassName = `${
    toBoolean(widgetnemgooReady?.isDefaultTheme)
      ? widgetAllaround?.divinsideblock?.className
        ? widgetAllaround?.divinsideblock?.className
        : "w-full h-full bg-white p-4 shadow-md overflow-hidden rounded-md"
      : ""
  }`;

  const divinsideblockStyle = {
    ...(widgetnemgooReady?.design?.style || widgetnemgooReady?.style),
    ...widgetAllaround?.divinsideblock?.style,
  };

  return {
    divouterblockClassName,
    divouterblockStyle,
    divinsideblockClassName,
    divinsideblockStyle,
  };
}

export function prepareDefaults(
  widgetnemgooReady: any,
  router: any,
  cloudQuery: any
) {
  const defaultNemgoo = widgetnemgooReady?.listConfig?.default;

  if (_.isEmpty(defaultNemgoo)) return null;

  // defaultNemgoo = {
  //   urlpath: "filtercategoryid",
  //   value: "1515",
  //   from: "", //url
  // }; маягийн объект байгаа.

  const { urlpath = "", from = "", multi = "0" } = defaultNemgoo;

  const value =
    from !== "url"
      ? cloudQuery[urlpath] || defaultNemgoo?.value
      : _.last(_.split(router?.asPath, "/")); //одоогоор url-ийн сүүлийн path-ийг авчихъя. /profile/about гэж байвал сүүлийн about авна гэсэн үг.

  return {
    value,
    urlpath,
    from,
    multi: toBoolean(multi),
  };
}

export function prepareDefaultReady(
  widgetnemgooReady: any,
  _router: any,
  cloudQuery: any
) {
  const defaultNemgoo = widgetnemgooReady?.listConfig?.default;
  if (_.isEmpty(defaultNemgoo)) return null;

  // defaultNemgoo = {
  //   urlpath: "price",
  //   value: "1515",
  // }; маягийн объект байгаа.

  // const dsfsdf = {
  //   ["sale—low"]: "37",
  //   ["sale—high"]: "100",
  //   ["price—low"]: "100",
  //   ["price—high"]: "500050",
  // };

  //Одоо шалгах ажиллагаа явагдана.
  const myDefaultPathNemgoo = defaultNemgoo?.urlpath;

  let result: any = [];
  _.mapKeys(cloudQuery, (value, key) => {
    if (`${myDefaultPathNemgoo}—low` == key) {
      result.push({
        value: value,
        urlpath: defaultNemgoo?.urlpath,
        urlReady: `${myDefaultPathNemgoo}—low`,
        topath: defaultNemgoo?.topath,
      });
    }

    if (`${myDefaultPathNemgoo}—high` == key)
      result.push({
        value: value,
        urlpath: defaultNemgoo?.urlpath,
        urlReady: `${myDefaultPathNemgoo}—high`,
        topath: defaultNemgoo?.topath,
      });

    if (myDefaultPathNemgoo == key)
      result.push({
        value: value,
        urlpath: defaultNemgoo?.urlpath,
        urlReady: myDefaultPathNemgoo,
        topath: defaultNemgoo?.topath,
      });
  });

  return result;
}

export function prepareC009GetProcessData(processCode: any, rawData: any) {
  const c009 = processCode.slice(processCode.length - 4);

  if (c009 !== "c009") return rawData;
  if (_.isEmpty(rawData)) return rawData;

  // c009 гэдэг нь тусгай функц юм. Гэхдээ Dataview-тэй адил энгийн дата буцаах ёстой боловч өөр бүтэцтэй ирж абйгаа тул энд боловсруулж энгийн DV-тэй адил болгож байгаа юм.

  const readyData = _.values(rawData[0]?.c009);
  return readyData;
}

export function getSlugItem(hostObject: any, n = 0) {
  const slug = hostObject?.pageSlug;
  const slugItem = _.split(slug, "/");

  return slugItem[n] || "";
}

export function prepareDefaultValueForFilter(query: any, columnName: any) {
  const columnList = [
    `dvc${columnName}`,
    `dvc${columnName}~min`,
    `dvc${columnName}~max`,
  ];

  let defaultValues: any = {};

  _.forEach(columnList, (column) => {
    if (query[column]) {
      defaultValues[column] = query[column];
    }
  });

  return defaultValues;
}

export function twMergeUtil(config: any, ...args: any) {
  const result = useMemo(() => {
    const cooler = replaceTemplateV2(args.join(" "), config);
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

  // llog("🚀 DDDDDDDD ~ originalObjectReady:", originalObjectReady);

  const result = pupa(originalObjectReady, dataObject, {
    ignoreMissing: optionReady?.ignoreMissing,
    transform: (data) => {
      return data?.value || option?.transformTo;
    },
  });

  return JSON.parse(result);
}

export function prepareQueryString(myParams: any) {
  //myParams гэсэн объектийг queryString болгож хувиргана.

  const filteredParams = _.pickBy(myParams, _.identity);
  const formattedParamsArray = _.map(
    filteredParams,
    (value, key) => `${key}=${value}`
  );
  const queryString = _.join(formattedParamsArray, "&");

  return queryString;
}

export function extractInternalProcess(processDVCode: any) {
  // insert _001
  // edit _002
  // get _004
  // delete _005

  const processCodeInsert = `${processDVCode}_001`;
  const processCodeEdit = `${processDVCode}_002`;
  const processCodeGet = `${processDVCode}_004`;
  const processCodeDelete = `${processDVCode}_005`;

  return {
    processCodeInsert,
    processCodeEdit,
    processCodeGet,
    processCodeDelete,
  };
}

export function convertPathTypeToFieldType(pathDataType: any) {
  const pathToFieldTypeMap: any = {
    string: "input", //input
    long: "inputnumber", //input password
    date: "date",
    boolean: "checkbox",
    combo: "select",
    button: "button",
    group: "list",
    file: "image",
    description_auto: "text",
    text_editor: "textEditor",
  };

  return pathToFieldTypeMap?.[pathDataType] || "text";
}

export function convertPathTypeToFieldTypeV2(pathDataType: any) {
  const pathToFieldTypeMap: any = {
    text: "input", //input
    // long: "inputnumber", //input password
    // date: "date",
    // boolean: "checkbox",
    combo: "select",
    popup: "select",
    radio: "radio",
    number: "input",
    // button: "button",
    // group: "list",
    // file: "image",
    // description_auto: "text",
    text_editor: "editor",
    multicombo: "multicombo",
    expression_editor: "jsoneditor", //jsonview
  };

  return pathToFieldTypeMap?.[pathDataType] || "text";
}

export const convertKeysToLowercase = (arr: any) => {
  const convertedArr = _.map(arr, (obj) => {
    const convertedObj = _.mapKeys(obj, (_value, key) => {
      return _.toLower(key);
    });
    return convertedObj;
  });

  return convertedArr;
};

export function parentidToChildrenV2(
  readyDatasrc: any,
  idField: any,
  parentIdField: any,
  parentId = null
): any {
  console.log("🚀 ~ Killer readyDatasrc:", readyDatasrc);
  const filteredItems = _.filter(
    readyDatasrc,
    (item) => item[parentIdField] == parentId
  );
  console.log("Filtered Items:", filteredItems); // Log filteredItems for debugging

  return _.map(filteredItems, (item: any) => ({
    ...item,
    children: parentidToChildrenV2(
      readyDatasrc,
      idField,
      parentIdField,
      item[idField]
    ),
  }));
}

export const buildHierarchy = (data: any, fieldNames: any) => {
  const { uidField, labelField, parentUidField } = fieldNames;

  const map = new Map();
  const root: any = { [uidField]: "", [labelField]: "Root", children: [] };

  data.forEach((item: any) => {
    map.set(item[uidField], { ...item, children: [] });
  });

  data.forEach((item: any) => {
    if (item[parentUidField] === "") {
      root.children.push(map.get(item[uidField]));
    } else {
      const parent = map.get(item[parentUidField]);
      if (parent) {
        parent.children.push(map.get(item[uidField]));
      }
    }
  });

  return root;
};

export function convertToNestedStructure(flatArray: any, fieldNames: any) {
  const { uidField, labelField, parentUidField } = fieldNames;

  const buildHierarchy = (data: any) => {
    const map = new Map();
    const root: any = { [uidField]: "", [labelField]: "Root", children: [] };

    data.forEach((item: any) => {
      map.set(item[uidField], { ...item, children: [] });
    });

    data.forEach((item: any) => {
      if (item[parentUidField] === "") {
        root.children.push(map.get(item[uidField]));
      } else {
        const parent = map.get(item[parentUidField]);
        if (parent) {
          parent.children.push(map.get(item[uidField]));
        }
      }
    });

    return root;
  };

  return buildHierarchy(flatArray);
}

export const convertToNestedStructure123 = (flatArray: any) => {
  const nestedStructure: any = {};

  const getChildren = (parentId: any) =>
    _.filter(flatArray, { parentUid: parentId });

  const buildTree: any = (parentId: any) => {
    const children = getChildren(parentId);
    if (_.isEmpty(children)) {
      return null;
    }

    const tree = children.map((item) => {
      return {
        ...item,
        children: buildTree(item.uid),
      };
    });

    return tree;
  };

  // Assuming the top-level parent has an empty string parentUid
  nestedStructure.children = buildTree("");

  return nestedStructure;
};

export function convertToNested55(arr: any, parentUid = "") {
  const result: any = [];
  arr.forEach((item: any) => {
    if (item.parentUid == parentUid) {
      const newItem = { ...item, children: convertToNested55(arr, item.uid) };
      result.push(newItem);
    }
  });
  return result;
}

export function buildNestedStructure55(
  children: any,
  uidField = "uid",
  parentUidField = "parentUid",
  parentUidValue = ""
) {
  const nestedChildren = children
    .filter((item: any) =>
      parentUidValue === ""
        ? !item[parentUidField]
        : item[parentUidField] === parentUidValue
    )
    .map((item: any) => ({
      ...item,
      children: buildNestedStructure55(
        children,
        uidField,
        parentUidField,
        item[uidField]
      ),
    }));

  return nestedChildren;
}

export function setNodeOpenStatus(
  data: any,
  targetUid: any,
  uidFieldName: any
) {
  function findNodeAndSetOpenStatus(
    node: any,
    targetUid: any,
    uidFieldName: any
  ) {
    if (node[uidFieldName] === targetUid) {
      node.isOpen = true;
      return true;
    }

    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        const found = findNodeAndSetOpenStatus(child, targetUid, uidFieldName);
        if (found) {
          node.isOpen = true;
          return true;
        } else {
          child.isOpen = false; // Set isOpen=false for non-matching children
        }
      }
    }

    return false;
  }

  // Set isOpen=false for all nodes initially
  function setAllNodesClosed(nodes: any) {
    for (const node of nodes) {
      node.isOpen = false;
      if (node.children && node.children.length > 0) {
        setAllNodesClosed(node.children);
      }
    }
  }

  setAllNodesClosed(data);

  // Find and set isOpen=true for the specified uid
  for (const node of data) {
    findNodeAndSetOpenStatus(node, targetUid, uidFieldName);
  }

  return data;
}

function transformFormObjectWithLodash(formObject: any) {
  return _.mapValues(formObject, (value, key) => {
    if (_.isString(value) && value.includes("@@@")) {
      const [id, desc] = _.split(value, "@@@");
      return { [key]: id, [`${key}id`]: id, [`${key}_desc`]: desc };
    }
    return value;
  });
}

export function transformFormResultToMotobase(formResult: any) {
  const transformed = transformFormObjectWithLodash(formResult);
  // llog("erwerewr", transformed);
  return _.reduce(
    transformed,
    (result, value, key) => {
      if (_.isObject(value) && !_.isArray(value)) {
        return { ...result, ...value };
      }
      return { ...result, [key]: value };
    },
    {}
  );
  // return formResult;
}

export function transformFormResultToMetaverse(
  formResult: any,
  motoBase: any
): any {
  if (motoBase) {
    const rrrr = transformFormResultToMotobase(formResult);
    // llog("xxdsdds", { formResult, rrrr });
    return rrrr;
  }

  // Check if formResult is an array
  if (_.isArray(formResult)) {
    // If it's an array, map over each item and apply the transformation
    return _.map(formResult, (item: any) =>
      transformFormResultToMetaverse(item, null)
    );
  }

  const result: any = _.transform(
    formResult,
    (result: any, value: any, key: any) => {
      // Check if the value is a JSON object

      //imageList асуудал үүсээд байгаа тул болив.
      if (_.isObject(value)) {
        try {
          // const jsonObject = JSON.parse(value);
          result[key] = JSON.stringify(value); // Stringify the JSON object
        } catch (error) {
          console.error(`Error parsing JSON for key "${key}":`, error);
          result[key] = value; // Keep the original value if parsing fails
        }
        return null;
      }

      // console.log("🚀 ~ transformFormResultToMetaverse ~ value:", value);
      //array буюу multicombo байвал дараах аргаар салгана
      if (_.isArray(value)) {
        result[key] = _.map(value, (item) => _.split(item, "@@@")[0]);
        result[`${key}_desc`] = _.join(
          _.map(value, (item) => _.split(item, "@@@")[1]),
          ", "
        );
        return null;
      }

      if (!_.endsWith(key, "_desc")) {
        if (_.includes(value, "@@@")) {
          const [newValue, newDesc] = _.split(value, "@@@");
          result[key] = newValue;
          result[`${key}_desc`] = newDesc;
        } else {
          result[key] = value;
        }
      }
    },
    {}
  );

  return result;
}

export function processFormDataToSplit(myValue: any) {
  const [newValue, newDesc] = _.split(myValue, "@@@");

  return { id: newValue, value: newDesc };
}

export function toMotoDate(myDate: any) {
  return dayjs(myDate)?.fromNow();
}

export function toMotoPrice(myPrice: any) {
  return formatMoney(myPrice, {
    precision: 0,
    thousand: ",",
    symbol: "төг",
    format: "%v %s",
  });
}

export function toMotoKm(myKm: any) {
  return formatMoney(myKm, {
    precision: 0,
    thousand: ",",
    symbol: "км",
    format: "%v %s",
  });
}

export function prepareUrlQueryMulti(newValue: any, nowValue: any) {
  // Parse the nowValue string into a JavaScript array
  let parsedNowValue = jsonParse(nowValue || "[]");

  const valueIndex = _.findIndex(
    parsedNowValue,
    (item) => item === _.toNumber(newValue)
  );

  if (valueIndex !== -1) {
    parsedNowValue?.splice(valueIndex, 1);
  } else {
    if (!Array.isArray(parsedNowValue)) {
      parsedNowValue = [];
    }

    parsedNowValue?.push(_.toNumber(newValue));
  }

  // Stringify the updated array back to a JSON string
  let updatedNowValue = _.isEmpty(parsedNowValue)
    ? undefined
    : JSON.stringify(parsedNowValue);

  // Log the updated JSON string
  // console.log("ssssss", updatedNowValue);

  // Returns the updated JSON string
  return updatedNowValue;
}

export function isAlreadyIncludeThisQueryInUrlQuery(
  BigQuery: any,
  smallQuery: any,
  myUrlPath: any
) {
  const isYes = _.includes(BigQuery?.[myUrlPath], smallQuery?.[myUrlPath]);

  return isYes;
}

export function checkInclude(myValue: any, ArrayValue: any) {
  // Parse the ArrayValue string to convert it into an actual array of numbers
  const parsedArrayValue = jsonParse(ArrayValue || "[]");

  // Check if myValue is included in the array
  // const isIncluded = parsedArrayValue.includes(parseInt(myValue));
  const isIncluded = _.includes(parsedArrayValue, _.parseInt(myValue));

  return isIncluded;
}

export function cleanObjectFromDoubleQuote(obj: any) {
  const stringified = JSON.stringify(obj);

  const cleanedString = stringified.replace(/\\\"/g, "");

  // llog("🚀 ~ cleanObjectWithStringify ~ cleanedString:", {
  //   stringified,
  //   cleanedString,
  //   ddd: encode(stringified),
  // });

  return jsonParseV3(cleanedString, false, true);
}

export function jsonStringV2(json: any) {
  const encodedItem = encode(JSON.stringify(json));
  return encodedItem;
}

export function jsonParseV2(json: any, isDecode: boolean) {
  try {
    return JSON.parse(isDecode ? decode(json) : json);
  } catch (ex) {
    return {};
  }
}

export function jsonParseV3(
  json: any,
  isDecode: boolean = false,
  changeQuote = false
) {
  if (!_.isString(json)) return json;
  if (_.isEmpty(json)) return json;

  let jsonString = changeQuote ? _.replace(json, /&quot;/g, '"') : json;

  // Step 2: Check if the first and last characters are quotes
  if (jsonString.startsWith('"') && jsonString.endsWith('"')) {
    // Step 3: Remove the first and last quotes if present
    jsonString = jsonString.substring(1, jsonString.length - 1);
  }

  // if (changeQuote) {
  //   llog("XXXXXXXXXXXXXXX", jsonString);
  // }

  try {
    return JSON.parse(isDecode ? decode(jsonString) : jsonString);
  } catch (ex) {
    console.warn("jsonParseV3 - Алдаа гарчэээ", { error: ex, json });
    return json;
  }
}

export function getSomeFields(
  fieldList: any,
  columnNamePath: any,
  searchCriteria: any
) {
  return _.map(searchCriteria, (criteria) =>
    _.find(
      fieldList,
      (item) => _.toUpper(_.get(item, columnNamePath)) === _.toUpper(criteria)
    )
  );
}

export function generateMotoOrderCode() {
  const currentDate = dayjs();
  const year = currentDate.format("YY");
  const month = currentDate.format("MM");
  const day = currentDate.format("DD");
  const hour = currentDate.format("HH");
  const minute = currentDate.format("mm");
  const second = currentDate.format("ss");

  const orderCode = `${year}${month}${day}-${hour}${minute}${second}`;
  return orderCode;
}

export function logMessage(
  message = "Энд console ажиллав",
  env = "development"
) {
  // Зөвхөн development
  if (env === "development" && process.env.NODE_ENV === "development") {
    console.log(message);
    return;
  }

  // Зөвхөн production
  if (env === "production" && process.env.NODE_ENV === "production") {
    console.log(message);
    return;
  }

  console.log(message);
}

// export function llog(...args: any) {
//   if (process.env.NODE_ENV === "development") {
//     console.log(...args);
//   }
// }

// // In a browser environment
// if (typeof window !== "undefined") {
//   window.llog = llog;
// }

// // In a Node.js environment
// if (typeof global !== "undefined") {
//   global.llog = llog;
// }

// // Attach llog to the window object in development environment
// if (process.env.NODE_ENV === "development" && process.browser) {
//   window.llog = llog;
// }

// export function llogProd(...args: any) {
//   if (process.env.NODE_ENV === "production") {
//     console.log(...args);
//   }
// }

// export function llogAll(...args: any) {
//   console.log(...args);
// }

export function removeMotoRootAndUpdateChildren(
  data: any,
  rootValue = "moto-Root"
) {
  // Filter out "Moto Root" and update child objects
  const updatedData = data.filter((item: any) => {
    if (item.title === rootValue) {
      // Update child objects to have no parent ID
      const childItems = data.filter(
        (child: any) => child.parentid === item.id
      );
      childItems.forEach((child: any) => {
        child.parentid = "";
      });

      // Do not include "Moto Root" in the updated data
      return false;
    }
    return true;
  });

  return updatedData;
}

export function cleanHTMLContent(htmlContent: any) {
  if (_.isEmpty(htmlContent)) return htmlContent;

  // Remove HTML tags and extra whitespaces
  const textContent = _.trim(_.unescape(htmlContent?.replace(/<[^>]*>/g, " ")));

  return textContent;
}

export function extractFirst50Words(htmlContent: any) {
  if (_.isEmpty(htmlContent)) return htmlContent;

  // Remove HTML tags and extra whitespaces
  const textContent = cleanHTMLContent(htmlContent);

  // Take the first 50 words
  const first50Words = _.take(_.words(textContent), 50).join(" ");

  return first50Words;
}

export function isYouTubeVideo(url: any) {
  return _.includes(url, "youtube.com") || _.includes(url, "youtu.be");
}

export function isVideoFile(url: any) {
  // Regular expression to match common video file extensions
  const videoExtensionsRegex = /\.(mp4|mov|avi|wmv|flv|mkv|webm)$/i;
  return videoExtensionsRegex.test(url);
}

export function prepareReadyDataSrc(readyDatasrc: any, orderByProps: any) {
  // жишээ
  // orderByProps = [
  //   { key: "ordernumber", order: "asc" },
  //   { key: "title", order: "asc" }
  // ];

  const orderByCriteria = orderByProps
    ? [
        orderByProps.map((prop: any) => prop.key),
        orderByProps.map((prop: any) => prop.order),
      ]
    : [
        ["ordernumber", "title"],
        ["asc", "asc"],
      ];

  const result = _(readyDatasrc)
    .filter((item) => toBoolean(item?.isactive || "1"))
    .orderBy(...orderByCriteria)
    .value();

  return result;
}

export function generateMemorable5DigitId() {
  const year = new Date().getFullYear().toString().slice(-2); // Сүүлийн 2 оронтой жил (24)
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // Амархан уншигдах үсгүүд
  const randomLetter = letters[Math.floor(Math.random() * letters.length)]; // 1 үсэг сонгох
  const randomNumber = Math.floor(Math.random() * 90 + 10); // 10-99 хооронд санамсаргүй тоо

  return `${year}${randomLetter}${randomNumber}`; // Формат: "24X57"
}

export function generate16DigitIdV2() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime().toString(); // Get current timestamp in milliseconds
  const randomPart = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0"); // 5-digit random number
  const id = (timestamp + randomPart).substring(0, 16); // Combine and ensure 16 digits
  return id;
}

export function generate16DigitId() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime(); // Get current timestamp in milliseconds
  const id = timestamp.toString().substring(0, 16); // Convert timestamp to string and take the first 16 digits
  return id;
}

export const uppercaseString = (string: any) => {
  const ddd = string
    .split("_")
    .map((word: any) => word.toUpperCase())
    .join("_");
  // llog("DDDDDDDDDDSdewre rewr w", { string, ddd });
  return ddd;
};

export const isEmptyExtend = (myString: any) => {
  const unwantedValues = ["-", ",", " "];

  if (_.isEmpty(myString) || _.includes(unwantedValues, myString)) {
    return true;
  }
  return false;
};

//Машины дугаар шалгах - vehicle car license number, plate number
export const isValidPlate = (plate: any) => {
  //2527УНГ
  const pattern = /^\d{4}[А-ЯЁӨҮ]{3}$/;
  return pattern.test(plate);
};

/*  --------------------  */

// 🔧 Generalized extractor
export const extractFromKeys = (item: any, keys: string[]): any => {
  if (!_.isObject(item) && (_.isString(item) || _.isNumber(item))) return item;

  const lowerItem = _.mapKeys(item, (_val, key) => key.toLowerCase());
  const lowerKeys = keys.map((k) => k.toLowerCase());

  for (const key of lowerKeys) {
    const val = lowerItem?.[key];

    if (_.isObject(val) && _.has(val, "value")) {
      return val.value;
    }

    if (_.isString(val) || _.isNumber(val) || _.isBoolean(val)) {
      return val;
    }
  }

  return "";
};

export const titleKeys = ["title", "name", "label", "key"];
export const subTitleKeys = ["subtitle", "second", "label", "key"];
export const descriptionKeys = ["description", "text", "value"];
export const valueKeys = ["value", "text", "description"];
export const subKeys = ["sub", "second", "footer", "dataContent", "note"];
export const imageKeys = ["image", "mainimage", "objectstorage", "imageavatar"];
export const iconKeys = ["icon", "logo"];
export const mainNumberKeys = ["mainnumber", "price"];

export const prepareTitle = (item: any) => extractFromKeys(item, titleKeys);

export const prepareSubTitle = (item: any) =>
  extractFromKeys(item, subTitleKeys);

export const prepareDescription = (item: any) =>
  extractFromKeys(item, descriptionKeys);

export const prepareValue = (item: any) => extractFromKeys(item, valueKeys);

export const prepareSub = (item: any) => extractFromKeys(item, subKeys);

export const prepareImage = (item: any) =>
  extractFromKeys(item, imageKeys) || "/images/icon-no-image_tcse9o.svg";

export const prepareIcon = (item: any) => extractFromKeys(item, iconKeys);

export const prepareMainNumber = (item: any) =>
  extractFromKeys(item, mainNumberKeys);

/*  --------------------  */

export const updateArrayBasket = (array: any, newItem: any) => {
  const updateArray = _.cloneDeep(array || []);
  const itemIndex = _.findIndex(updateArray, { item_id: newItem?.item_id });

  if (itemIndex !== -1) {
    _.assign(updateArray[itemIndex], newItem);
  } else {
    updateArray.push(newItem);
  }

  return updateArray;
};

export const updateArrayBasket2 = (array: any, newItem: any) => {
  const updateArray = _.cloneDeep(array || []);
  const itemIndex = _.findIndex(updateArray, { id: newItem?.id });

  if (itemIndex !== -1) {
    _.assign(updateArray[itemIndex], newItem);
  } else {
    updateArray.push(newItem);
  }

  return updateArray;
};

export const removeItemArrayBasket = (array: any, newItem: any) => {
  const updateArray = _.cloneDeep(array || []);
  const itemIndex = _.findIndex(updateArray, { item_id: newItem?.item_id });

  if (itemIndex !== -1) {
    _.pullAt(updateArray, itemIndex);
  }

  return updateArray;
};

export const removeItemArrayBasket2 = (array: any, newItem: any) => {
  const updateArray = _.cloneDeep(array || []);
  const itemIndex = _.findIndex(updateArray, { id: newItem?.id });

  if (itemIndex !== -1) {
    _.pullAt(updateArray, itemIndex);
  }

  return updateArray;
};

export function parentidToChildren(
  arr: any,
  idfield = "id",
  parentidfield = "parentid"
) {
  let tree = [],
    mappedArr: any = {},
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  _.map(arr, (item) => {
    mappedArr[item[idfield]] = { ...item, children: [], isLeaf: true };
  });

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

export function countChildren(dataset: any): any {
  return _.reduce(
    dataset,
    (acc, item) => {
      return (
        acc +
        1 +
        (_.isArray(item?.children) ? countChildren(item?.children) : 0)
      );
    },
    0
  );
}

export function formatFileSize(bytes: any) {
  const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  let i = 0;

  // Loop to find the correct unit
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  // Return the size with two decimal places and the appropriate unit
  return `${bytes.toFixed(2)} ${units[i]}`;
}

export function isValidJson(input: any) {
  try {
    if (typeof input === "object" && input !== null) {
      // Safely handle large numbers by stringifying without losing precision
      const jsonString = JSON.stringify(input, (_key, value) =>
        typeof value === "number" && !Number.isSafeInteger(value)
          ? value.toString()
          : value
      );

      JSON.parse(jsonString); // Validate JSON format
    } else {
      // If input is not an object, parse it directly
      JSON.parse(input);
    }

    return true; // If no errors, input is valid JSON
  } catch (e) {
    return false; // Invalid JSON
  }
}

export function containsUrlQuery(obj: any): any {
  // Use _.some to check if any value contains "URLQUERY_"
  return _.some(obj, (value) => {
    // If the value is an object, recursively check its nested values
    if (_.isObject(value)) {
      return containsUrlQuery(value); // Recursively call the function for nested objects
    }
    // Otherwise, check if the value contains "URLQUERY_"
    return _.includes(value, "URLQUERY_");
  });
}

export function convertFirstLevelKeysToLowercase(obj: any) {
  return _.mapKeys(obj, (_value, key) => key.toLowerCase());
}

export function extractByPrefix(obj: any, prefix: any): any {
  return _.reduce(
    obj,
    (result: any, value, key) => {
      if (_.startsWith(key, prefix)) {
        result[key] = value;
      }
      return result;
    },
    {}
  );
}

export function extractObjectMain(obj: any) {
  const keysToKeep = ["id", "title", "mainimage", "description", "price"];

  return _.pick(obj, keysToKeep);
}

export function cleanAllNullKeysFromObject(input: any): any {
  if (_.isArray(input)) {
    return input
      .map(cleanAllNullKeysFromObject)
      .filter((item) => !_.isNil(item)); // null болон undefined хасна
  } else if (_.isPlainObject(input)) {
    const cleaned = _.mapValues(input, cleanAllNullKeysFromObject);
    return _.omitBy(cleaned, _.isNil); // null болон undefined утгатай key-г хасна
  }
  return input;
}

export function transformRefKeysFromObject(data: any, prefix = "ref_"): any {
  if (_.isArray(data)) {
    // Массив бол бүх элементүүдэд рекурсивээр өөрчлөлт хийнэ
    return data.map((item: any) => transformRefKeysFromObject(item, prefix));
  } else if (_.isPlainObject(data)) {
    const transformed: any = {};
    const groupedRefs: any = {};

    _.forEach(data, (value, key) => {
      if (_.startsWith(key, prefix)) {
        const parts = key.split("_");
        if (parts.length >= 3) {
          const groupKey = `${prefix}${parts[1]}`;
          const subKey = parts.slice(2).join("_");

          if (!groupedRefs[groupKey]) {
            groupedRefs[groupKey] = {};
          }
          groupedRefs[groupKey][subKey] = value;
        } else {
          transformed[key] = value;
        }
      } else {
        transformed[key] = transformRefKeysFromObject(value, prefix);
      }
    });

    return { ...transformed, ...groupedRefs };
  }
  return data;
}

export function groupParentKeysFromObject(data: any, prefix = "parent_"): any {
  if (_.isArray(data)) {
    return data.map((item: any) => groupParentKeysFromObject(item, prefix));
  } else if (_.isPlainObject(data)) {
    const transformed: any = {};
    const grouped: any = {};

    _.forEach(data, (value, key) => {
      if (_.startsWith(key, prefix)) {
        const newKey = key.replace(prefix, ""); // "parent_ref_transmission_id" -> "ref_transmission_id"
        grouped[newKey] = value;
      } else {
        transformed[key] = groupParentKeysFromObject(value, prefix);
      }
    });

    // grouped объект хоосон биш үед л parent болгон нэмнэ
    return _.isEmpty(grouped)
      ? transformed
      : { ...transformed, parent: grouped };
  }
  return data;
}

export function oklchToHex(oklch: string): string | null {
  const rgb = converter("rgb")(parse(oklch));
  if (!rgb) return null;

  const toHex = (c: number) =>
    Math.round(c * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

// utility функц: CSS variable-г pixel утга болгон хөрвүүлэх
export function getFontSizePx(rawValue: string): number {
  if (rawValue.includes("rem")) {
    return parseFloat(rawValue) * 16;
  } else if (rawValue.includes("px")) {
    return parseFloat(rawValue);
  }
  return 14; // fallback
}

export function remToPx(remString: string, baseFontSize = 16): number {
  const rem = parseFloat(remString);
  return rem * baseFontSize;
}
export function getTailwindValueFromCss(cssName: string) {
  const cssValue = getComputedStyle(document.documentElement)
    .getPropertyValue(cssName) //--text-brant --color-brand etc
    .trim();

  return cssValue;
}

export function getHexWithOpacity(hexColor: string, opacity: number): string {
  // if (!/^#([A-Fa-f0-9]{6})$/.test(hexColor)) {
  //   throw new Error("hexColor нь #RRGGBB форматтай байх ёстой");
  // }
  if (opacity < 0 || opacity > 100) {
    throw new Error("opacity нь 0-100 хооронд байх ёстой");
  }

  const alpha = Math.round((opacity / 100) * 255);
  const alphaHex = alpha.toString(16).padStart(2, "0").toUpperCase();

  return `${hexColor}${alphaHex}`;
}

/**
 * Any төрлийн утгыг найдвартай number болгох (жишээ: "5000.00" → 5000)
 */
export const safeNumber = (value: any, defaultValue: number = 0): number => {
  if (_.isNil(value)) return defaultValue;
  const num = parseFloat(_.toString(value).replace(/,/g, ""));
  return _.isFinite(num) ? num : defaultValue;
};

export const totalPrice = (
  items: Array<any>,
  field: string = "price",
  countField: string = "count"
): number => {
  return reduce(
    items,
    (sum, item) =>
      sum + safeNumber(item[field]) * safeNumber(item[countField], 1),
    0
  );
};

//jagaa end
