function buildUrlWithOptionalParams(baseUrl: string, params: any) {
    const url = new URL(baseUrl);
    const searchParams = url.searchParams;
  
    for (const key in params) {
      const value = params[key];
      if (value !== undefined && value !== null && value !== '') {
        searchParams.set(key, value);
      }
    }
  
    return url.toString();
  }