# Use an OpenJDK image
FROM openjdk:23-ea-1-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml
COPY mvnw .
COPY mvnw.cmd .
COPY .mvn .mvn
COPY pom.xml .

# Give executable permission to the Maven wrapper script
RUN chmod +x mvnw

# Resolve dependencies (useful for faster rebuilds)
RUN ./mvnw dependency:go-offline

# Copy the source code (excluding the target directory)
# COPY src /app/src

# Expose the port 8080 for the Spring Boot app
EXPOSE 8080

# Run the Spring Boot app with the Maven wrapper, and enable devtools for auto-reloading
CMD ["./mvnw", "spring-boot:run", "-Dspring.devtools.restart.enabled=true"]