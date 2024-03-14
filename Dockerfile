

FROM openjdk:17-alpine 
WORKDIR /opt
ENV port=8052
EXPOSE 8052
COPY ./target/userService-superSingle.jar /opt/userService-superSingle.jar
CMD [ "java", "-jar", "/opt/userService-superSingle.jar" ]