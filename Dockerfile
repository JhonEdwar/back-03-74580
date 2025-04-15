FROM node:20.16.0

# Create app directory
WORKDIR /app   

# Install app dependencies
COPY package*.json ./   

RUN npm install

# Bundle app source
COPY ./src ./src  

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]