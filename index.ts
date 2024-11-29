import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'kuantokusta/1.0.1 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * @throws FetchError<400, types.OrderControllerFindAllResponse400>
   * @throws FetchError<401, types.OrderControllerFindAllResponse401>
   * @throws FetchError<404, types.OrderControllerFindAllResponse404>
   */
  orderController_findAll(metadata?: types.OrderControllerFindAllMetadataParam): Promise<FetchResponse<200, types.OrderControllerFindAllResponse200>> {
    return this.core.fetch('/kms/orders', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.OrderControllerCountResponse400>
   * @throws FetchError<401, types.OrderControllerCountResponse401>
   * @throws FetchError<404, types.OrderControllerCountResponse404>
   */
  orderController_count(metadata?: types.OrderControllerCountMetadataParam): Promise<FetchResponse<200, types.OrderControllerCountResponse200>> {
    return this.core.fetch('/kms/orders/count', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.OrderControllerFindOneResponse400>
   * @throws FetchError<401, types.OrderControllerFindOneResponse401>
   * @throws FetchError<404, types.OrderControllerFindOneResponse404>
   */
  orderController_findOne(metadata: types.OrderControllerFindOneMetadataParam): Promise<FetchResponse<200, types.OrderControllerFindOneResponse200>> {
    return this.core.fetch('/kms/orders/{id}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.OrderControllerApproveOrderResponse400>
   * @throws FetchError<401, types.OrderControllerApproveOrderResponse401>
   * @throws FetchError<404, types.OrderControllerApproveOrderResponse404>
   */
  orderController_approveOrder(metadata: types.OrderControllerApproveOrderMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/kms/orders/{id}/approve', 'patch', metadata);
  }

  /**
   * @throws FetchError<400, types.OrderControllerSendOrderResponse400>
   * @throws FetchError<401, types.OrderControllerSendOrderResponse401>
   * @throws FetchError<404, types.OrderControllerSendOrderResponse404>
   */
  orderController_sendOrder(body: types.OrderControllerSendOrderBodyParam, metadata: types.OrderControllerSendOrderMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/kms/orders/{id}/send', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.OrderControllerCancelOrderResponse400>
   * @throws FetchError<401, types.OrderControllerCancelOrderResponse401>
   * @throws FetchError<404, types.OrderControllerCancelOrderResponse404>
   */
  orderController_cancelOrder(body: types.OrderControllerCancelOrderBodyParam, metadata: types.OrderControllerCancelOrderMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/kms/orders/{id}/cancel', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.OfferControllerReadOneResponse400>
   * @throws FetchError<401, types.OfferControllerReadOneResponse401>
   * @throws FetchError<404, types.OfferControllerReadOneResponse404>
   */
  offerController_readOne(metadata: types.OfferControllerReadOneMetadataParam): Promise<FetchResponse<200, types.OfferControllerReadOneResponse200>> {
    return this.core.fetch('/kms/offers/{productId}', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.OfferControllerReadManyResponse400>
   * @throws FetchError<401, types.OfferControllerReadManyResponse401>
   * @throws FetchError<404, types.OfferControllerReadManyResponse404>
   */
  offerController_readMany(metadata?: types.OfferControllerReadManyMetadataParam): Promise<FetchResponse<200, types.OfferControllerReadManyResponse200>> {
    return this.core.fetch('/kms/offers', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.OfferControllerUpdatePriceResponse400>
   * @throws FetchError<401, types.OfferControllerUpdatePriceResponse401>
   * @throws FetchError<404, types.OfferControllerUpdatePriceResponse404>
   */
  offerController_updatePrice(body: types.OfferControllerUpdatePriceBodyParam, metadata: types.OfferControllerUpdatePriceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/kms/offers/{productId}/price', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.OfferControllerUpdateStockResponse400>
   * @throws FetchError<401, types.OfferControllerUpdateStockResponse401>
   * @throws FetchError<404, types.OfferControllerUpdateStockResponse404>
   */
  offerController_updateStock(body: types.OfferControllerUpdateStockBodyParam, metadata: types.OfferControllerUpdateStockMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/kms/offers/{productId}/stock', 'patch', body, metadata);
  }

  /**
   * @throws FetchError<400, types.CancellationReasonsControllerFindAllResponse400>
   * @throws FetchError<401, types.CancellationReasonsControllerFindAllResponse401>
   */
  cancellationReasonsController_findAll(metadata?: types.CancellationReasonsControllerFindAllMetadataParam): Promise<FetchResponse<200, types.CancellationReasonsControllerFindAllResponse200>> {
    return this.core.fetch('/kms/cancellation-reasons', 'get', metadata);
  }

  /**
   * @throws FetchError<400, types.CouriersControllerFindAllResponse400>
   * @throws FetchError<401, types.CouriersControllerFindAllResponse401>
   */
  couriersController_findAll(metadata?: types.CouriersControllerFindAllMetadataParam): Promise<FetchResponse<200, types.CouriersControllerFindAllResponse200>> {
    return this.core.fetch('/kms/couriers', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { CancellationReasonsControllerFindAllMetadataParam, CancellationReasonsControllerFindAllResponse200, CancellationReasonsControllerFindAllResponse400, CancellationReasonsControllerFindAllResponse401, CouriersControllerFindAllMetadataParam, CouriersControllerFindAllResponse200, CouriersControllerFindAllResponse400, CouriersControllerFindAllResponse401, OfferControllerReadManyMetadataParam, OfferControllerReadManyResponse200, OfferControllerReadManyResponse400, OfferControllerReadManyResponse401, OfferControllerReadManyResponse404, OfferControllerReadOneMetadataParam, OfferControllerReadOneResponse200, OfferControllerReadOneResponse400, OfferControllerReadOneResponse401, OfferControllerReadOneResponse404, OfferControllerUpdatePriceBodyParam, OfferControllerUpdatePriceMetadataParam, OfferControllerUpdatePriceResponse400, OfferControllerUpdatePriceResponse401, OfferControllerUpdatePriceResponse404, OfferControllerUpdateStockBodyParam, OfferControllerUpdateStockMetadataParam, OfferControllerUpdateStockResponse400, OfferControllerUpdateStockResponse401, OfferControllerUpdateStockResponse404, OrderControllerApproveOrderMetadataParam, OrderControllerApproveOrderResponse400, OrderControllerApproveOrderResponse401, OrderControllerApproveOrderResponse404, OrderControllerCancelOrderBodyParam, OrderControllerCancelOrderMetadataParam, OrderControllerCancelOrderResponse400, OrderControllerCancelOrderResponse401, OrderControllerCancelOrderResponse404, OrderControllerCountMetadataParam, OrderControllerCountResponse200, OrderControllerCountResponse400, OrderControllerCountResponse401, OrderControllerCountResponse404, OrderControllerFindAllMetadataParam, OrderControllerFindAllResponse200, OrderControllerFindAllResponse400, OrderControllerFindAllResponse401, OrderControllerFindAllResponse404, OrderControllerFindOneMetadataParam, OrderControllerFindOneResponse200, OrderControllerFindOneResponse400, OrderControllerFindOneResponse401, OrderControllerFindOneResponse404, OrderControllerSendOrderBodyParam, OrderControllerSendOrderMetadataParam, OrderControllerSendOrderResponse400, OrderControllerSendOrderResponse401, OrderControllerSendOrderResponse404 } from './types';
