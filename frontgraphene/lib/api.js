export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    }${path}`;
  }

  export function getStrapiAUTH(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL_AUTH || "http://localhost:1337/api/auth"
    }${path}`;
  }

  export function getStrapiURLWithoutApi(path = "") {
    return `${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path, options = {}) {
    const requestUrl = getStrapiURL(path).includes('?') ? getStrapiURL(path) + '&populate=*' : getStrapiURL(path) + '?populate=*';
    const response = await fetch(requestUrl, options);
    const data = await response.json();
    return data;
  }

  export async function fetchAPIPost(path, options = {}) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl, options);
    console.log(response)
    const data = await response.json();
    return data;
  }

  export async function fetchAuth(path, options = {}) {
    const requestUrl = getStrapiAUTH(path)
    const response = await fetch(requestUrl, options);
    const data = await response.json();
    return data;
  }