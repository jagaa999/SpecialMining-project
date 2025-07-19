import _ from "lodash";

/**
 * Cloudinary болон өөр төрлийн CDN зурагт параметр шингээж, thumbnail URL үүсгэх.
 * @param imageUrl - Original image path
 * @param cloudinaryParam - Cloudinary format like 'w_200,h_150,c_scale' or 'w_250'
 */
export const processCloudinaryImage = (
  imageUrl: string,
  cloudinaryParam?: string
): string => {
  if (_.isEmpty(imageUrl) || _.isEmpty(cloudinaryParam)) return imageUrl;

  // ----- CLOUDINARY -----
  if (_.includes(imageUrl, "cloudinary")) {
    const cloudinaryUrlRegex = /^https?:\/\/res\.cloudinary\.com\//;
    if (cloudinaryUrlRegex.test(imageUrl)) {
      return imageUrl.replace("/upload/", `/upload/${cloudinaryParam}/`);
    }
    return imageUrl;
  }

  // ----- cdn.moto -----
  if (_.includes(imageUrl, "cdn.moto")) {
    const parts = imageUrl.split("/");
    const filename = _.last(parts);
    const baseUrl = _.join(_.dropRight(parts), "/");
    return `${baseUrl}/thumb/${cloudinaryParam}/${filename}`;
  }

  // ----- ERP storage/uploads -----
  if (_.includes(imageUrl, "storage/uploads")) {
    const sizeMap: Record<string, string> = {
      w_500: "mid",
      w_250: "mid",
      w_50: "sm",
    };

    const sizeSuffix = sizeMap[cloudinaryParam || ""];
    if (!sizeSuffix) return imageUrl;

    const parts = imageUrl.split("/");
    const filename = _.last(parts) ?? "";
    const [name, ext] = filename.split(".");
    const baseUrl = _.join(_.dropRight(parts), "/");

    return `${baseUrl}/thumb/${name}_${sizeSuffix}.${ext}`;
  }

  // --- fallback ---
  return imageUrl;
};

export const processResponsiveCDNImage = (imageUrl: string) => {
  if (!_.includes(imageUrl, "cdn.moto")) return {};
  if (_.includes(imageUrl, "/thumb/")) return {};

  const parts = imageUrl.split("/");
  const filenameWithExtension = _.last(parts);
  const baseUrl = _.join(_.dropRight(parts), "/");

  const imageUrl500px = `${baseUrl}/thumb/w_500/${filenameWithExtension}`;
  const imageUrl250px = `${baseUrl}/thumb/w_250/${filenameWithExtension}`;
  const imageUrl50px = `${baseUrl}/thumb/w_50/${filenameWithExtension}`;

  return {
    srcSet: `
  ${imageUrl} 500w,
  ${imageUrl500px} 250w,
  ${imageUrl250px} 150w,
  ${imageUrl50px} 10w
`,
    sizes:
      "(max-width: 150px) 10px, (max-width: 250px) 150px, (max-width: 500px) 250px, 500px",
    src: undefined,
  };
};

export const processResponsiveCDNImageV2 = (imageUrl: string) => {
  if (!_.includes(imageUrl, "cdn.moto")) return {};
  if (_.includes(imageUrl, "/thumb/")) return {};

  const parts = imageUrl.split("/");
  const filenameWithExtension = _.last(parts);
  const baseUrl = _.join(_.dropRight(parts), "/");

  const imageUrl500px = `${baseUrl}/thumb/w_500/${filenameWithExtension}`;
  const imageUrl250px = `${baseUrl}/thumb/w_250/${filenameWithExtension}`;
  const imageUrl50px = `${baseUrl}/thumb/w_50/${filenameWithExtension}`;

  return {
    srcSet: `
      ${imageUrl50px} 50w,
      ${imageUrl250px} 250w,
      ${imageUrl500px} 500w
    `
      .trim()
      .replace(/\s+/g, " "),
    sizes: `
      (max-width: 150px) 50px,
      (max-width: 250px) 250px,
      (max-width: 500px) 500px,
      100vw
    `
      .trim()
      .replace(/\s+/g, " "),
    src: imageUrl500px, // Default
  };
};
