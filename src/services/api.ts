import {catchError, concatMap, of, tap} from "rxjs";
import {fromFetch} from 'rxjs/fetch';
import {API_URL} from "../envs/env";

const jsonToQueryParams = (object: any) => object ? `?${Object.keys(object).map(key => `${key}=${object[key]}`).join('&')}` : '';

const requestBase = (url: string, params?: any, headers?: any, body?: any) => {
    const urlBase = `${API_URL}${url}`;
    const myUrl = params ? urlBase.concat(`${jsonToQueryParams(params)}`) : urlBase;
    let request = {
        method: "GET",
        headers: headers || {
            "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
        }
    };
    request = body ? {...request, body: JSON.stringify(body)} as any : request;
    return {myUrl, request};
}

export const get = (url: string, params?: any, headers?: any) => {
    const {myUrl, request} = requestBase(url, params, headers);
    return fromFetch(myUrl, request)
        .pipe(
            concatMap((response) => response.json()),
            catchError((error) => {
                return of(error);
            })
        );
};

export const post = (url: string, body: any, params?: any, headers?: any) => {
    const {myUrl, request} = requestBase(url, params, headers, body);
    return fromFetch(myUrl, {...request, method: "POST"}).pipe(
        concatMap((response) => response.json()),
        catchError((error) => {
            return of(error);
        })
    );
};

export const put = (url: string, body: any, params: any, headers: any) => {
    const {myUrl, request} = requestBase(url, params, headers, body);
    return fromFetch(myUrl, {...request, method: "PUT"}).pipe(
        concatMap((response) => response.json()),
        catchError((error) => {
            return of(error);
        })
    );
};

export const patch = (url: string, body: any, params: any, headers: any) => {
    const {myUrl, request} = requestBase(url, params, headers, body);
    return fromFetch(myUrl, {...request, method: "PATCH"}).pipe(
        concatMap((response) => response.json()),
        catchError((error) => {
            return of(error);
        })
    );
};

export const del = (url: string, body: any, params: any, headers: any) => {
    const {myUrl, request} = requestBase(url, params, headers, body);
    return fromFetch(myUrl, {...request, method: "DELETE"}).pipe(
        concatMap((response) => response.json()),
        catchError((error) => {
            return of(error);
        })
    );
};