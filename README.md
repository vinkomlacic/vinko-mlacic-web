# Personal Website

## Local development
1. `cd` to repository root directory
2. Build the Docker image
```shell
docker build -t website:latest -f ./local_deployment/Dockerfile .
```
or with Powershell:
```shell
./local_deployment/build.ps1
```
3. Start the server (accessible at *http://localhost:8080*)
```shell
docker run --rm --name website -p 8080:80 -d website
```
or with PowerShell:
```shell
./local_deployment/start.ps1
```

## Thanks BootstrapMade.com!
Built using Bootstrap 5 template gotten for free from here:
https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
