# Exceptions

Exceptions play a crucial role in a robust system.

In Node Experience we take advantage of the HTTP library mechanism, to avoid having so many `try catch`s. Therefore, we have a single place where we handle errors.


```ts

/** src -> Shared -> Application -> AppKoa.ts **/

// Generic error handling middleware.
this.app.use(ErrorFastifyHandler.handle);


```

In this place, we manage an exceptions factory,
where we can understand what the error we get is and be able to handle it in the way that is most comfortable for us.

Something to keep in mind is that, conceptually speaking, we have three large sets of exceptions.

1. On the one hand, we have the exceptions that are part of the libraries such as `Mongoose`, 
in this case we can catch the 
libraries of this style and return the information we need. \

For example:

```ts

/** src -> Shared -> Presentation -> ExceptionFactory **/

// ...

if (err?.name === 'MongoServerError')
{
    if (err.code === 11000)
    {
        exception = new DuplicateEntityHttpException();
    }
}

// ...

```

This way we can catch when we have a duplicate in the mongo database.

2. As in the previous code example, we can see that we have an exception at the Http level. Http type exceptions are another set of exceptions.

Why do we differentiate them?

We differentiate them because the infrastructure layer such as Mongo, Redis, SQL, etc. They are not directly related to the Http layer, 
therefore, we find ourselves with the situation that if the presentation layer is something other than Http, 
then the exception logic cannot be tied to a http exception.

3. Finally, we have the exceptions that are created within a specific domain, for example:

```ts

/** src -> Auth -> Domain -> Exceptions -> BadCrenetialsException.ts **/

class BadCredentialsException extends ErrorException
{
    builder()
    {
        const locales = Locales.getInstance().getLocales();
        const key = 'auth.domain.exceptions.badCredentials';
        super({
            message: locales.__(key),
            errorCode: key
        }, BadCredentialsException.name);
    }
}

```

This type of exceptions is not subject to any type of library.
