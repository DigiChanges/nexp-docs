# RequestID

Returning to the topic of dependency injection, we find an injection at the request level. We accomplish that with the injection handler container middleware. (`tsyringe`).


```ts

/** src -> Shared -> Application -> Http -> AppKoa **/

// ...

this.app.use(ContainerKoaMiddleware);


// ...

```

What the middleware does is generate a child container to end up generating a unique context in each request.

```ts

/** src -> Shared -> Presentation -> Middlewares -> ContainerKoaMiddleware **/

import Koa from 'koa';
import container from '../../../register';
import { createRequestContext } from '../Shared/RequestContext';

type KoaCtx = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>;
type KoaNext = Koa.Next;

const ContainerKoaMiddleware = async(ctx: KoaCtx, next: KoaNext) =>
{
    ctx.container = container.createChildContainer();
    createRequestContext(ctx.container);

    await next();
};

export default ContainerKoaMiddleware;

```

The `RequestContext` contains the creation of the context with the help of the `async_hooks` package,
when the context is created what happens is the creation of a `requestId` and the child `container` that is created in the middleware.

```ts
export const createRequestContext = (container: DependencyContainer, requestId = nanoId.nanoid()) =>
{
    store.clear();
    const requestInfo = { requestId, container };
    store.set(asyncHooks.executionAsyncId(), requestInfo);
    return requestInfo;
};
```

The `requestId` is unique for each request made to the API, which allows us to recognize each request and also understand more efficiently when calls are made in microservices. So it is easier to detect errors when we have many connected services, since we can use the created requestId to send it through the header and thus detect when something fails and which request was the trigger.
