// eslint-config-next exports a flat config array directly in Next.js 16
import nextConfig from "eslint-config-next";
import nextTsConfig from "eslint-config-next/typescript";

const eslintConfig = [...Object.values(nextConfig), ...Object.values(nextTsConfig)];

export default eslintConfig;
