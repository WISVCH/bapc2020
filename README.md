# bapc2020
BAPC

## Building and running
```shell script
docker build -t bapc2020 .
docker run --rm -it -p 127.0.0.1:8080:8080 --tmpfs /tmp --read-only bapc2020
```
Access the website in your browser on http://localhost:8080
