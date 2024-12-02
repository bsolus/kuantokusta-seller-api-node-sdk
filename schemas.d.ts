declare const CancellationReasonsControllerFindAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the page of results to return.";
                };
                readonly maxResultsPerPage: {
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the number of records to return in one request, specified as an integer from 1 to 100.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly reason: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "reason"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CouriersControllerFindAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the page of results to return.";
                };
                readonly maxResultsPerPage: {
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the number of records to return in one request, specified as an integer from 1 to 100.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly trackingRegex: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["id", "name"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfferControllerReadMany: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the page of results to return.";
                };
                readonly maxResultsPerPage: {
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the number of records to return in one request, specified as an integer from 1 to 100.";
                };
                readonly offerSku: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly importAuto: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly isBlacklisted: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly productId: {
                        readonly type: "string";
                    };
                    readonly productName: {
                        readonly type: "string";
                    };
                    readonly url: {
                        readonly type: "string";
                    };
                    readonly offerSku: {
                        readonly type: "string";
                    };
                    readonly cpc: {
                        readonly type: readonly ["number", "null"];
                    };
                    readonly importAuto: {
                        readonly type: "boolean";
                    };
                    readonly price: {
                        readonly type: "number";
                    };
                    readonly oldPrice: {
                        readonly type: "number";
                    };
                    readonly stock: {
                        readonly type: "number";
                    };
                    readonly shipping: {
                        readonly type: "object";
                        readonly properties: {
                            readonly normal: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly delivery: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly min: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                            readonly max: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                        };
                                        readonly required: readonly ["min", "max"];
                                    };
                                    readonly preparation: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly min: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                            readonly max: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                        };
                                        readonly required: readonly ["min", "max"];
                                    };
                                    readonly value: {
                                        readonly type: readonly ["number", "null"];
                                    };
                                };
                                readonly required: readonly ["delivery", "preparation", "value"];
                            };
                            readonly express: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly delivery: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly min: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                            readonly max: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                        };
                                        readonly required: readonly ["min", "max"];
                                    };
                                    readonly preparation: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly min: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                            readonly max: {
                                                readonly type: readonly ["number", "null"];
                                            };
                                        };
                                        readonly required: readonly ["min", "max"];
                                    };
                                    readonly value: {
                                        readonly type: readonly ["number", "null"];
                                    };
                                };
                                readonly required: readonly ["delivery", "preparation", "value"];
                            };
                        };
                        readonly required: readonly ["normal", "express"];
                    };
                    readonly updatedAt: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly productUrl: {
                        readonly type: "string";
                    };
                    readonly categoryId: {
                        readonly type: "number";
                    };
                    readonly commission: {
                        readonly type: "number";
                    };
                    readonly isBlacklisted: {
                        readonly type: "boolean";
                    };
                    readonly isTopBox: {
                        readonly type: "boolean";
                    };
                };
                readonly required: readonly ["productId", "productName", "url", "offerSku", "cpc", "importAuto", "price", "oldPrice", "stock", "shipping", "updatedAt", "productUrl", "categoryId", "commission", "isBlacklisted", "isTopBox"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfferControllerReadOne: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly productId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["productId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly productId: {
                    readonly type: "string";
                };
                readonly productName: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly offerSku: {
                    readonly type: "string";
                };
                readonly cpc: {
                    readonly type: readonly ["number", "null"];
                };
                readonly importAuto: {
                    readonly type: "boolean";
                };
                readonly price: {
                    readonly type: "number";
                };
                readonly oldPrice: {
                    readonly type: "number";
                };
                readonly stock: {
                    readonly type: "number";
                };
                readonly shipping: {
                    readonly type: "object";
                    readonly properties: {
                        readonly normal: {
                            readonly type: "object";
                            readonly properties: {
                                readonly delivery: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly min: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                        readonly max: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                    };
                                    readonly required: readonly ["min", "max"];
                                };
                                readonly preparation: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly min: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                        readonly max: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                    };
                                    readonly required: readonly ["min", "max"];
                                };
                                readonly value: {
                                    readonly type: readonly ["number", "null"];
                                };
                            };
                            readonly required: readonly ["delivery", "preparation", "value"];
                        };
                        readonly express: {
                            readonly type: "object";
                            readonly properties: {
                                readonly delivery: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly min: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                        readonly max: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                    };
                                    readonly required: readonly ["min", "max"];
                                };
                                readonly preparation: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly min: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                        readonly max: {
                                            readonly type: readonly ["number", "null"];
                                        };
                                    };
                                    readonly required: readonly ["min", "max"];
                                };
                                readonly value: {
                                    readonly type: readonly ["number", "null"];
                                };
                            };
                            readonly required: readonly ["delivery", "preparation", "value"];
                        };
                    };
                    readonly required: readonly ["normal", "express"];
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly productUrl: {
                    readonly type: "string";
                };
                readonly categoryId: {
                    readonly type: "number";
                };
                readonly commission: {
                    readonly type: "number";
                };
                readonly isBlacklisted: {
                    readonly type: "boolean";
                };
                readonly isTopBox: {
                    readonly type: "boolean";
                };
            };
            readonly required: readonly ["productId", "productName", "url", "offerSku", "cpc", "importAuto", "price", "oldPrice", "stock", "shipping", "updatedAt", "productUrl", "categoryId", "commission", "isBlacklisted", "isTopBox"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfferControllerUpdatePrice: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly price: {
                readonly type: "number";
                readonly minimum: 0.01;
                readonly maximum: 999999.99;
                readonly multipleOf: 0.01;
            };
        };
        readonly required: readonly ["price"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly productId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["productId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfferControllerUpdateStock: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly stock: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 1000000;
            };
        };
        readonly required: readonly ["stock"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly productId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["productId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerApproveOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerCancelOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly reasonId: {
                readonly type: "string";
                readonly description: "ID of the cancellation reason.";
            };
        };
        readonly required: readonly ["reasonId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerCount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. The following properties can be added to change filter behavior (_gte,_lte,_lt,_gt). Examples: \"createdAt_gte=2018-11-01T02:22:00.667\" , \"createdAt_lt=2018-11-01\"";
                };
                readonly createdAt_gte: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Greater than or equal, >=";
                };
                readonly createdAt_gt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Greater than, >";
                };
                readonly createdAt_lte: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Less than or equal, <=";
                };
                readonly createdAt_lt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Less than, <";
                };
                readonly orderState: {
                    readonly enum: readonly ["Approved", "Canceled", "WaitingPayment", "WaitingApproval", "InTransit", "Delivered"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by its state.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "number";
                };
            };
            readonly required: readonly ["count"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerFindAll: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. The following properties can be added to change filter behavior (_gte,_lte,_lt,_gt). Examples: \"createdAt_gte=2018-11-01T02:22:00.667\" , \"createdAt_lt=2018-11-01\"";
                };
                readonly createdAt_gte: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Greater than or equal, >=";
                };
                readonly createdAt_gt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Greater than, >";
                };
                readonly createdAt_lte: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Less than or equal, <=";
                };
                readonly createdAt_lt: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by creation date. Less than, <";
                };
                readonly orderState: {
                    readonly enum: readonly ["Approved", "Canceled", "WaitingPayment", "WaitingApproval", "InTransit", "Delivered"];
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter orders by its state.";
                };
                readonly page: {
                    readonly minimum: 1;
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the page of results to return.";
                };
                readonly maxResultsPerPage: {
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 10;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify the number of records to return in one request, specified as an integer from 1 to 100.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly orderId: {
                        readonly type: "string";
                    };
                    readonly deliveryAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly customerName: {
                                readonly type: "string";
                            };
                            readonly address1: {
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly zipCode: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly country: {
                                readonly type: "string";
                            };
                            readonly contact: {
                                readonly type: "string";
                            };
                            readonly vat: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly servicePoint: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly status: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly required: readonly ["status"];
                            };
                        };
                        readonly required: readonly ["customerName", "address1", "address2", "zipCode", "city", "country", "contact", "vat", "servicePoint"];
                    };
                    readonly billingAddress: {
                        readonly type: "object";
                        readonly properties: {
                            readonly customerName: {
                                readonly type: "string";
                            };
                            readonly address1: {
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly zipCode: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly country: {
                                readonly type: "string";
                            };
                            readonly contact: {
                                readonly type: "string";
                            };
                            readonly vat: {
                                readonly type: readonly ["string", "null"];
                            };
                            readonly servicePoint: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly status: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly required: readonly ["status"];
                            };
                        };
                        readonly required: readonly ["customerName", "address1", "address2", "zipCode", "city", "country", "contact", "vat", "servicePoint"];
                    };
                    readonly products: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly offerSku: {
                                    readonly type: "string";
                                };
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly quantity: {
                                    readonly type: "number";
                                };
                                readonly price: {
                                    readonly type: "number";
                                };
                            };
                            readonly required: readonly ["name", "offerSku", "id", "quantity", "price"];
                        };
                    };
                    readonly additionalInfo: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly productsPrice: {
                        readonly type: "number";
                    };
                    readonly shippingsPrice: {
                        readonly type: "number";
                    };
                    readonly totalPrice: {
                        readonly type: "number";
                    };
                    readonly deliveryTime: {
                        readonly type: "number";
                    };
                    readonly shipping: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["type", "value"];
                    };
                    readonly approvalDate: {
                        readonly format: "date-time";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly shippedDate: {
                        readonly format: "date-time";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly cancelDate: {
                        readonly format: "date-time";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly createdAt: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                    readonly updatedAt: {
                        readonly format: "date-time";
                        readonly type: "string";
                    };
                    readonly orderState: {
                        readonly type: "string";
                    };
                };
                readonly required: readonly ["orderId", "deliveryAddress", "billingAddress", "products", "additionalInfo", "productsPrice", "shippingsPrice", "totalPrice", "deliveryTime", "shipping", "createdAt", "updatedAt", "orderState"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerFindOne: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                };
                readonly deliveryAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customerName: {
                            readonly type: "string";
                        };
                        readonly address1: {
                            readonly type: "string";
                        };
                        readonly address2: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly zipCode: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                        };
                        readonly country: {
                            readonly type: "string";
                        };
                        readonly contact: {
                            readonly type: "string";
                        };
                        readonly vat: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly servicePoint: {
                            readonly type: "object";
                            readonly properties: {
                                readonly status: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly required: readonly ["status"];
                        };
                    };
                    readonly required: readonly ["customerName", "address1", "address2", "zipCode", "city", "country", "contact", "vat", "servicePoint"];
                };
                readonly billingAddress: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customerName: {
                            readonly type: "string";
                        };
                        readonly address1: {
                            readonly type: "string";
                        };
                        readonly address2: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly zipCode: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                        };
                        readonly country: {
                            readonly type: "string";
                        };
                        readonly contact: {
                            readonly type: "string";
                        };
                        readonly vat: {
                            readonly type: readonly ["string", "null"];
                        };
                        readonly servicePoint: {
                            readonly type: "object";
                            readonly properties: {
                                readonly status: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly required: readonly ["status"];
                        };
                    };
                    readonly required: readonly ["customerName", "address1", "address2", "zipCode", "city", "country", "contact", "vat", "servicePoint"];
                };
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly offerSku: {
                                readonly type: "string";
                            };
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly quantity: {
                                readonly type: "number";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                        };
                        readonly required: readonly ["name", "offerSku", "id", "quantity", "price"];
                    };
                };
                readonly additionalInfo: {
                    readonly type: readonly ["string", "null"];
                };
                readonly productsPrice: {
                    readonly type: "number";
                };
                readonly shippingsPrice: {
                    readonly type: "number";
                };
                readonly totalPrice: {
                    readonly type: "number";
                };
                readonly deliveryTime: {
                    readonly type: "number";
                };
                readonly shipping: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["type", "value"];
                };
                readonly approvalDate: {
                    readonly format: "date-time";
                    readonly type: readonly ["string", "null"];
                };
                readonly shippedDate: {
                    readonly format: "date-time";
                    readonly type: readonly ["string", "null"];
                };
                readonly cancelDate: {
                    readonly format: "date-time";
                    readonly type: readonly ["string", "null"];
                };
                readonly createdAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly updatedAt: {
                    readonly format: "date-time";
                    readonly type: "string";
                };
                readonly orderState: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["orderId", "deliveryAddress", "billingAddress", "products", "additionalInfo", "productsPrice", "shippingsPrice", "totalPrice", "deliveryTime", "shipping", "createdAt", "updatedAt", "orderState"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderControllerSendOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly trackingId: {
                readonly type: "string";
                readonly description: "ID for tracking the order.";
            };
            readonly weight: {
                readonly type: "number";
                readonly default: 1;
                readonly description: "Physical weight of the package.";
            };
            readonly courierId: {
                readonly type: "string";
                readonly description: "ID of the courier.";
            };
            readonly products: {
                readonly description: "Products for shipping.";
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly productId: {
                            readonly type: "string";
                            readonly description: "ID of the product.";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the product.";
                        };
                        readonly quantity: {
                            readonly type: "number";
                            readonly description: "Quantity of the product sent on this order.";
                        };
                    };
                    readonly required: readonly ["productId", "name", "quantity"];
                };
            };
            readonly volumes: {
                readonly type: "number";
                readonly default: 1;
                readonly description: "Number of volumes";
            };
        };
        readonly required: readonly ["trackingId", "weight", "courierId", "volumes"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CancellationReasonsControllerFindAll, CouriersControllerFindAll, OfferControllerReadMany, OfferControllerReadOne, OfferControllerUpdatePrice, OfferControllerUpdateStock, OrderControllerApproveOrder, OrderControllerCancelOrder, OrderControllerCount, OrderControllerFindAll, OrderControllerFindOne, OrderControllerSendOrder };
