const baseUrl = process.env.NODE_ENV === "porduction" ?  'https://deployment-url.now.sh' :
'http://localhost:3000';

export default baseUrl;