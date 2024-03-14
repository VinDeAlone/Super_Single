

FROM openjdk:17-alpine 
WORKDIR /opt
ENV port=8052
EXPOSE 8052
COPY ./target/userService_superSingle.jar /opt/userService_superSingle.jar
CMD [ "java", "-jar", "/opt/userService_superSingle.jar" ]