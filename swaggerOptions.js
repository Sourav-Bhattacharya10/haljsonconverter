const swaggerOptions = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "HalJsonConverter",
        version: "0.1.0",
        description:
          "This is a simple HAL to JSON converter made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        }
      },
      servers: [
        {
          url: "http://localhost:4500",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

export default swaggerOptions;