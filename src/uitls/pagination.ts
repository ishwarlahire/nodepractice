export const getPagination = (body: any) => {
  const page = Number(body.page) || 1;
  const limit = Number(body.limit) || 10;
  const offset = (page - 1) * limit;

  return {
    page,
    limit,
    offset
  };
};