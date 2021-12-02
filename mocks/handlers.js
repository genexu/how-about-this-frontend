import { rest } from 'msw';
import { enableAll, rests } from './mocks.default';

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const handlers = Object.keys(rests)
  .map((key) => rests[key])
  .filter((item) => item.enable ?? enableAll)
  .map((item) =>
    rest[item.method || 'get'](item.path, async (req, res, ctx) => {
      if (item.delay) await delay(item.delay);

      const { status, data, errors } = item;
      if (!status || status === 200) return res(ctx.status(200), ctx.json(data));
      return res(ctx.status(status), ctx.json({ ...errors[status] }));
    }),
  );

export default handlers;
