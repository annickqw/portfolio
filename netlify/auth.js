exports.handler = async (event, context) => {
  return {
    statusCode: 501,
    body: JSON.stringify({
      error: 'This is a placeholder Netlify function. OAuth login will not work until you deploy a proper auth handler (like netlify-cms-oauth-provider).'
    }),
  };
};