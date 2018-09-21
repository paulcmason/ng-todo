FROM microsoft/dotnet:sdk
ENV DOTNET_USE_POLLING_FILE_WATCHER 1
WORKDIR /app

# Sigh.... Sort windows file line endings...
RUN apt-get update && apt-get install -y dos2unix
COPY migrate-db-and-run.sh /bootstrap/migrate-db-and-run.sh
RUN dos2unix /bootstrap/migrate-db-and-run.sh

EXPOSE 5000
ENTRYPOINT [ "/bin/bash" ]