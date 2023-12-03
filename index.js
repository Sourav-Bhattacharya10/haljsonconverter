// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";

// import swaggerOptions from './swaggerOptions';
// import converterRouter from "./routes/converterRouter";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 4500;

// const specs = swaggerJsdoc(swaggerOptions);
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

// app.get("/", (req, res) => {
//   res.send("<h2>Convert Hal+JSON to JSON</h2>");
// });

// app.use("/converter", converterRouter);

// app.listen(PORT, () => {
//   console.log(`API is listening on port ${PORT}`);
// });


import { convertHalToJson } from './helpers/converter';

const halData = {
    "_links": {
        "self": {
            "href": "https://example.com/api/orders"
        },
        "next": {
            "href": "https://example.com/api/orders?page=2"
        },
        "find": {
            "href": "https://example.com/api/orders{?id}",
            "templated": true
        }
    },
    "_embedded": {
        "orders": [
            {
                "_links": {
                    "self": {
                        "href": "https://example.com/api/orders/123"
                    },
                    "basket": {
                        "href": "https://example.com/api/baskets/987"
                    },
                    "customer": {
                        "href": "https://example.com/api/customers/456"
                    }
                },
                "total": 30.00,
                "currency": "USD",
                "status": "shipped"
            },
            {
                "_links": {
                    "self": {
                        "href": "https://example.com/api/orders/124"
                    },
                    "basket": {
                        "href": "https://example.com/api/baskets/988"
                    },
                    "customer": {
                        "href": "https://example.com/api/customers/457"
                    }
                },
                "total": 20.00,
                "currency": "USD",
                "status": "processing"
            }
        ]
    }
}

console.log("test : ", convertHalToJson(halData));