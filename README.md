## Goals
- Learn to build performant, dynamic frontends with next.js.
- Build various architectures i.e. traditional client-server, serverless, containerization
- Learn how to use messaging services like Kafka
- Eventually expand this project to learn more web technologies and tools.
## Basic Architecture (work in progress)
User Submits File -> s3 upload triggers lambda function -> queues job to kafka topic -> executes inference on basic-pitch model hosted using lambda functions.
