export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from /_next/static/
    if (url.pathname.startsWith('/_next/static/')) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        return new Response('Not found', { status: 404 });
      }
      return response;
    }

    try {
      // Serve static pages
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // If the page is not found, try serving index.html
        const indexResponse = await env.ASSETS.fetch(`${url.origin}/index.html`);
        return indexResponse;
      }
      return response;
    } catch (e) {
      return new Response('Error loading page', { status: 500 });
    }
  }
};