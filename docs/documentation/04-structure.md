# Structure

### Started

To begin with, you must understand that the project is divided by domains.

* `Auth` - In this domain we can find everything related to user, role, authentication and authorization with JWT.
* `Config` - Configuration domain. Here we will find several configuration files. In addition, we will also find a folder called `config` in the root of the project. In that folder we are going to find the possible configuration by environment and a file that changes it through the environment variables.
* `File` - In this domain we can find part of the file system.
* `Item` - An example domain.
* `Notification` - Domain for email notifications and web push notifications.
* `Shared` - Exceptional domain, are classes that are used throughout the system.
  
     * `Application` - Everything related to libraries like express or koa.
     * `Domain` - It is the basic domain layer as a base.
     * `Exceptions` - These are general exceptions.
     * `Factories` - These are the factories that are used throughout the system.
     * `Helpers`

* `Handler` - The handler belongs to the domain layer and is almost 100% assembled by libraries that handle inputs and responses. It captures the information from the requests, drives them to a concrete command, and delivers the response.

* `Transformer` - The transformer is responsible for the data outputs, depending on the representation requirements.

* `Entity` - They represent domain objects. They are made up of fields and properties and the domain logic that belongs to that entity.
Within entities is the interface or contract of the entity.

* `Services` - When a domain operation is recognized as important, there are services where these activities are grouped.

* `Repository` - It centralizes the logic to access the data sources through the chosen ORM. Encapsulates the set of stored objects, and the operations that can be performed on them.

* `Commands` - Commands allows to configure and text commands to be entered via a computer terminal, and they are then interpreted as a program is being executed.

* `Middlewares` - They provide services like managing authorize policy, throttle request, multer for uploading files, and others.
