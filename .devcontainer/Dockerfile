FROM mcr.microsoft.com/devcontainers/universal:latest

ENV HELLO=world
RUN echo test > ~/test.txt

RUN for i in {1..12}; do echo "waiting $i"; sleep 5; done