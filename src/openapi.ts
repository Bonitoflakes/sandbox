const config = {
  // schemaFile: "./src/petstore.yaml",
  schemaFile:"https://petstore.swagger.io/v2/swagger.json",
  apiFile: "./api.ts",
  apiImport: "API",
  outputFile: "./generated/petApi.ts",
  exportName: "petApi",
  hooks: true,
};

export default config;
