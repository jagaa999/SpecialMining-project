import _ from "lodash";
import { imageRootEnv } from "atom/engineBox/config/envPublic";

export const processCloudinaryImage = (
  imageUrl: string,
  cloudinaryParam: any
) => {
  if (
    !_.includes(imageUrl, "cloudinary") &&
    !_.includes(imageUrl, "cdn.moto")
    // &&
    // !_.includes(imageUrl, "storage/uploads") // Энэ нь ажиллахгүй байсан тул түр авав. Уг нь ERP-аас ирж буй зураг нь thumb авч чаддаг байсын.
  )
    return imageUrl;
  if (_.isEmpty(cloudinaryParam)) return imageUrl;

  /* --------------------- cloudinary --------------------- */
  if (_.includes(imageUrl, "cloudinary")) {
    // cloudinaryParam - w_200,h_150,c_scale гэх мэтээр өгч болно.
    const cloudinaryUrlRegex = /^https?:\/\/res\.cloudinary\.com\//;

    if (cloudinaryUrlRegex.test(imageUrl)) {
      return imageUrl.replace("/upload/", `/upload/${cloudinaryParam}/`);
    }

    return imageUrl;
  }

  /* ---------------------- cdn.moto ---------------------- */
  if (_.includes(imageUrl, "cdn.moto")) {
    // cloudinaryParam - w_50, w_250, w_500 гэсэн гурав л бий.
    const parts = imageUrl.split("/");
    const filenameWithExtension = _.last(parts);
    const baseUrl = _.join(_.dropRight(parts), "/");

    const thumbnailUrl = `${baseUrl}/thumb/${cloudinaryParam}/${filenameWithExtension}`;
    return thumbnailUrl;
  }

  if (_.includes(imageUrl, "storage/uploads")) {
    // mainimage: "storage/uploads/process/202306/file_9472171.jpg"
    // profile_photo_middle_thumb: "storage/uploads/process/202306/thumb/file_9472171_mid.jpg";
    // profile_photo_small_thumb: "storage/uploads/process/202306/thumb/file_9472171_sm.jpg";

    // cloudinaryParam - w_50, w_250, w_500 гэсэн гурав л бий.
    const sizeConfig: any = {
      w_500: "mid",
      w_250: "mid",
      w_50: "sm",
    };

    const mySize = sizeConfig[cloudinaryParam];

    const parts = imageUrl.split("/");
    const filenameWithExtension = _.last(parts);
    const [filename, extension] = _.split(filenameWithExtension, ".");
    const baseUrl = _.join(_.dropRight(parts), "/");

    const thumbnailUrl = `${baseUrl}/thumb/${filename}_${mySize}.${extension}`;

    return mySize ? thumbnailUrl : imageUrl;
  }
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

// srcset =
//   "https://s2.auto.drom.ru/photo/NlFd34suHnLGXrsyMOvkKLdaLhTgKepbeZsbNCH3sS9sGLbs5mREhMlUTdDQqx3bwTnrN2s6oABufUKe8EsHNAm4kEV9g4S4Gg.jpg 1x, https://s2.auto.drom.ru/photo/6Lo2ilPlseayrUEhRmQYbHYTJmGHWvcUcolu2HKB4Nj_9wXKjTjEc1e7ix3WF0YAFlpOpRZdPHrSKwpquzHf7v2RpqWralLLfw.jpg 2x";
// src =
//   "https://s2.auto.drom.ru/photo/NlFd34suHnLGXrsyMOvkKLdaLhTgKepbeZsbNCH3sS9sGLbs5mREhMlUTdDQqx3bwTnrN2s6oABufUKe8EsHNAm4kEV9g4S4Gg.jpg";

/* ------------------- image root fix ------------------- */
export const imageRootFix = (imageUrl: string, provider = "cozy") => {
  const imageRootUrl = imageRootEnv[_.upperCase(provider)];

  const imgSrc = _.startsWith(imageUrl, "storage/")
    ? `${imageRootUrl}${imageUrl}`
    : imageUrl;

  return imgSrc;
};

//#-------------- Image To Moto CDN

export const downloadImageAndUploadToCDN = async ({
  oldImageUrl,
  hostObject,
}: {
  oldImageUrl: string;
  hostObject: any;
}) => {
  if (_.isEmpty(oldImageUrl)) return;

  // llog("XXXXXXXXXXXXXXXXXXXXXX", hostObject);

  const imageReady = await fetch(
    `${
      process.env.NEXT_PUBLIC_HOST_PLATFORM_API_V2
    }/api/motocdn/download-upload-image-cdn-moto?imageurl=${oldImageUrl}&hostObject=${JSON.stringify(
      hostObject
    )}`
  )
    .then((res) => {
      if (!res.ok) {
        // throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        console.log(`Failed to fetch: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then(async (data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
      // Handle the error or return a default value
      return { error: "Failed to fetch image" };
    });

  return imageReady;
};

export async function downloadMultiImagesAndUploadToCDN({
  imageUrls,
  hostObject,
}: {
  imageUrls: any;
  hostObject: any;
}) {
  if (_.isEmpty(imageUrls)) return;

  // Use Promise.all to concurrently fetch data for all images
  const imageDataArray = await Promise.all(
    imageUrls.map(async (imageUrl: string) => {
      const imageData = await downloadImageAndUploadToCDN({
        oldImageUrl: imageUrl,
        hostObject,
      });
      return imageData;
    })
  );

  return imageDataArray;
}
