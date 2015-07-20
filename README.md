# Docker Webapp Example

A simple example of using Docker to deploy a web app. The stack used here is Node.js, but these principles could be applied to any stack that runs on a Linux distribution (Ruby, Python, Java, etc).

## Running the app

To run this app you need to already have Docker installed. For platform specific instructions see this article: [Docker Installation](https://docs.docker.com/installation/)

Once you have docker running, we can start. From this repository:

1. Build and run the MongoDB container:

    ```
    sudo docker build -t my/mongodb ./mongodb
    sudo docker run -d --name mongo my/mongodb
    ```

2. Build and run the web app. Make sure not to forget the `--link` flag:

    ```
    sudo docker build -t my/webapp .
    sudo docker run -d -P --name webapp --link mongo my/webapp
    ```

3. Find out what port docker has assigned to your app:

    ```
    sudo docker port webapp 3000
    ```

You should see something like `0.0.0.0:32774`. Copy that into your browser and check out the app. 

**Note:** If you're running docker through Boot2Docker or Docker Machine you will need to access the port on the IP of the VM running docker. To find this do the following:

**Boot2Docker:** `boot2docker ip`

**Docker Machine:** `docker-machine ip dev`

For Docker Machine you may need to specify a different VM other than `dev` depending on what you named your machine when you crated it.
