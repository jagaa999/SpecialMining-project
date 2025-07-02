/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.moto.mn',
      'res.cloudinary.com', // ← энэ нэмэгдээгүй байсан байна!
    ],
  },
};

module.exports = nextConfig;
