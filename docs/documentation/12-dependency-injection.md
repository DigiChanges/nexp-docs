# Dependency Injection

In this section, we will explain how dependency injection works in NExp.

We are currently using [tsyringe](https://github.com/Microsoft/tsyringe).

It is this file that records all the dependencies.

In this case, we add concrete classes that represent the data repository.
Additionally, we use a dependency injection 
strategy through a factory to be able to implement a proxy.
When the abstract repository is required to be resolved, 
it can actually also inject a CacheRepository to improve performance when using the paginated list.

```ts
/** src -> register.ts **/

if (defaultDbConfig === 'Mongoose')
{
    container.register<IItemRepository>(REPOSITORIES.IItemRepository, { useFactory: instanceCachingFactory((c: DependencyContainer) =>
    {
        let repository: IBaseRepository<unknown> = new ItemMongooseRepository();

        if (cacheConfig.enable)
        {
            const cacheDataAccess: ICacheDataAccess = c.resolve(REPOSITORIES.ICacheDataAccess);
            repository = new CacheRepository(repository, cacheDataAccess);
        }

        return repository;
    }) }, { lifecycle: Lifecycle.Transient });
    container.register<INotificationRepository<INotificationDomain>>(REPOSITORIES.INotificationRepository, { useClass: NotificationMongooseRepository }, { lifecycle: Lifecycle.Singleton });

}

// ...

// Shared
container.register<IEncryption>(FACTORIES.Md5EncryptionStrategy, { useClass: Md5EncryptionStrategy }, { lifecycle: Lifecycle.Singleton });

```
