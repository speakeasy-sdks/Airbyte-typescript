/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Source OAuth related resources to delegate access from user.
 */
export class DestinationOauth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Given a destination def ID generate an access/refresh token etc.
     */
    async completeDestinationOAuth(
        req: shared.CompleteDestinationOAuthRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CompleteDestinationOAuthResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CompleteDestinationOAuthRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/v1/destination_oauths/complete_oauth";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CompleteDestinationOAuthResponse =
            new operations.CompleteDestinationOAuthResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.completeOAuthResponse = utils.objectToClass(httpRes?.data);
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.notFoundKnownExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.NotFoundKnownExceptionInfo
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.invalidInputExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.InvalidInputExceptionInfo
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    async getDestinationOAuthConsent(
        req: shared.DestinationOauthConsentRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetDestinationOAuthConsentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.DestinationOauthConsentRequest(req);
        }

        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/v1/destination_oauths/get_consent_url";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0.7, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetDestinationOAuthConsentResponse =
            new operations.GetDestinationOAuthConsentResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.oAuthConsentRead = utils.objectToClass(
                        httpRes?.data,
                        shared.OAuthConsentRead
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.notFoundKnownExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.NotFoundKnownExceptionInfo
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.invalidInputExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.InvalidInputExceptionInfo
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.
     *
     */
    async setInstancewideDestinationOauthParams(
        req: shared.SetInstancewideDestinationOauthParamsRequestBody,
        config?: AxiosRequestConfig
    ): Promise<operations.SetInstancewideDestinationOauthParamsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.SetInstancewideDestinationOauthParamsRequestBody(req);
        }

        const baseURL: string = this._serverURL;
        const url: string =
            baseURL.replace(/\/$/, "") + "/v1/destination_oauths/oauth_params/create";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.SetInstancewideDestinationOauthParamsResponse =
            new operations.SetInstancewideDestinationOauthParamsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.knownExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.KnownExceptionInfo
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.notFoundKnownExceptionInfo = utils.objectToClass(
                        httpRes?.data,
                        shared.NotFoundKnownExceptionInfo
                    );
                }
                break;
        }

        return res;
    }
}
