import { rest } from "msw";
import { database } from "./data";

const RESPONSE_DELAY_MS = 1000;

export const handlers = [
  // product
  rest.get("/api/product/list", (req, res, ctx) => {
    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(database.findProducts()));
  }),

  rest.get("/api/product/:id", (req, res, ctx) => {
    const product = database.findProducts(req.params.id);
    if (!product) {
      return res(ctx.delay(RESPONSE_DELAY_MS), ctx.status(404));
    }

    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(product));
  }),

  // order
  rest.get("/api/order/list", (req, res, ctx) => {
    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(database.findOrder()));
  }),

  rest.get("/api/order/my", (req, res, ctx) => {
    const order = database.findOrder();
    const index = Date.now() % 2;
    order.status = ["음식 준비중", "배달중"][index];
    order.position = [
      [30, 30],
      [60, 60],
    ][index];
    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json(order));
  }),

  rest.post("/api/order", (req, res, ctx) => {
    const order = database.createOrder(JSON.parse(req.body));
    return res(ctx.delay(RESPONSE_DELAY_MS), ctx.json({ ...order }));
  }),
];
