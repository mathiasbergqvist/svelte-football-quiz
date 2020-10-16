import base64 from 'base-64';

export const getAuthHeaders = () => {
    let headers = new Headers();
    headers.append(
        'Authorization',
        'Basic ' + base64.encode(BASIC_AUTH_USERNAME + ':' + BASIC_AUTH_PASSWORD)
    );
    return headers;
};
