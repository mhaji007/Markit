const baseUrl = process.env.NODE_ENV === "porduction" ?  'https://mymarkit.now.sh' :
'http://localhost:3000';

export default baseUrl;