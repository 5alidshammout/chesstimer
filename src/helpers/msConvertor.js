const msConvertor = ms => new Date(ms).toISOString().slice(14, -1);
export default msConvertor;
