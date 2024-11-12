/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/join-seds",
        destination: "/join-seds/general-membership-form",
        permanent: true, // Use `true` for a 308 Permanent Redirect or `false` for a 307 Temporary Redirect
      },
    ];
  },
};
