import {ContentClient} from 'dc-delivery-sdk-js'
import {chunk, flatten} from 'lodash'

/**
 * ID or Key request
 */
export type IdOrKey = {id: string} | {key: string}

/**
 * Add the fallback locale to a given locale.
 * @param locale The existing locale.
 * @returns The fallback locale.
 */
const addFallback = (locale: string | undefined): string => {
    if (locale == null) {
        return 'en-US,*'
    } else if (locale.indexOf(',') === -1) {
        return locale + ',*'
    }

    return locale
}

/**
 * Parameters for fetching content.
 */
export type FetchParams = {
    locale?: string;
    depth?: 'all' | 'root';
    format?: 'inlined';
    client?: ContentClient;
}

/**
 * Default fetch params.
 */
const defaultParams: FetchParams = {
    locale: 'en-US',
    depth: 'all',
    format: 'inlined'
}

/**
 * Combine the given fetch params with the defaults.
 * @param params Options provided by the user.
 * @returns Options for fetch with fallback to defaults.
 */
const addDefaultParams = (params: FetchParams = {}): FetchParams => {
    if (params) {
        return {
            ...defaultParams,
            ...params,
            locale: addFallback(params.locale)
        }
    } else {
        return {
            ...defaultParams
        }
    }
}

/**
 * Get content client fetch params from our fetch params.
 */
const getClientParams = (params: FetchParams): FetchParams => {
    const result: FetchParams = {}

    if (params.locale != null) result.locale = params.locale
    if (params.depth != null) result.depth = params.depth
    if (params.format != null) result.format = params.format

    return result
}

/**
 * Amplience API for fetching content. Supports setting a custom VSE,
 * Hierarchy fetch, personalisation and other helpful features.
 */
export class AmplienceAPI {
    client: ContentClient
    clientReady: Promise<void>
    clientReadyResolve: any

    /**
     * Create the Amplience API.
     */
    constructor() {
        this.clientReady = new Promise((resolve) => (this.clientReadyResolve = resolve))
        this.client = new ContentClient({hubName: process.env.AMPLIENCE_DC_HUB || 'styliticsdemodev'})
    }

    /**
     * Fetch content from Dynamic Content in batch.
     * @param args A list of IDs or keys to fetch.
     * @param params Options for fetch.
     * @returns Content or errors returned from Dynamic Content.
     */
    async fetchContent(args: IdOrKey[], params: FetchParams = {}) {
        params = addDefaultParams(params)

        const client = params?.client ?? this.client
        const chunks = chunk(args, 12)

        let responses = await Promise.all(
            chunks.map(
                async (arg: IdOrKey[]) =>
                    (await client.getContentItems(arg, getClientParams(params))).responses
            )
        )

        const items = flatten(responses).map((response) => {
            if ('content' in response) {
                return response.content
            }
            return response.error
        })

        return items
    }
}

/**
 * The default Amplience client.
 */
export const defaultAmpClient = new AmplienceAPI()