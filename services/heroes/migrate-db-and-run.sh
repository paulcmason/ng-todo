#!/bin/bash
dotnet restore
dotnet ef database update
dotnet watch run --no-restore --urls http://0.0.0.0:5000