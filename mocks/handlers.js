import { rest } from 'msw';
import { enableAll, rests } from './mocks.default';

const handlers = Object.keys(rests)
  .map((key) => rests[key])
  .filter((item) => item.enable ?? enableAll)
  .map((item) =>
    rest[item.method || 'get'](item.path, (req, res, ctx) => {
      const { status, data, errors } = item;
      if (!status || status === 200) return res(ctx.status(200), ctx.json(data));
      return res(ctx.status(status), ctx.json({ ...errors[status] }));
    }),
  );

export default handlers;
