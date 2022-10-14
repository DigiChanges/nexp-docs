# Dependency Injection

In this section we will explain how dependency injection works in NExp.

We are currently using [tsyringe](https://github.com/Microsoft/tsyringe).

It is this file that records all the dependencies.

In this case what we do is add a concrete class of the `Repository` with its corresponding specification,
We also tell you what its life cycle would be. In the case of repositories, the correct thing is that it be `ContainerScoped`,
this is so it does a new for each request. Therefore, in a request if we are going to call in several parts the
repository we would be saving resources since we would not be creating it in each call.

On the other hand we have classes that work as singletons, this is done in this way since they do not participate much
in each request.

```ts
/** src -> register.ts **/

if (defaultDbConfig === 'TypeORM')
{
    container.register<IUserRepository>(REPOSITORIES.IUserRepository, { useClass: UserTypeORMRepository }, { lifecycle: Lifecycle.ContainerScoped });
    container.register<IRoleRepository>(REPOSITORIES.IRoleRepository, { useClass: RoleTypeORMRepository }, { lifecycle: Lifecycle.ContainerScoped });
    container.register<IItemRepository>(REPOSITORIES.IItemRepository, { useClass: ItemTypeORMRepository }, { lifecycle: Lifecycle.ContainerScoped });
    container.register<IFileRepository>(REPOSITORIES.IFileRepository, { useClass: FileTypeORMRepository }, { lifecycle: Lifecycle.ContainerScoped });
}

// ...

// Shared
container.register<IEncryption>(FACTORIES.BcryptEncryptionStrategy, { useClass: BcryptEncryptionStrategy }, { lifecycle: Lifecycle.Singleton });
container.register<IEncryption>(FACTORIES.Md5EncryptionStrategy, { useClass: Md5EncryptionStrategy }, { lifecycle: Lifecycle.Singleton });

```
