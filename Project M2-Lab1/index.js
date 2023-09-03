//Student Name: Devin Fries
//Student ID: 1219677836
//Date: 9/2/2023
const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./template/replaceTemplate');

// Read data from file
// Template
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
);

const dataObj = JSON.parse(tempCourse); // Parse the JSON data

//////////////////////////////////
// Create Server
const server = httpServer.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    if (query.id) { // Check if 'id' exists in the query
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/courses') { // Corrected the variable name here
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            const course = dataObj[Number(query.id)]; // Convert 'query.id' to a number
            const strCourseName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse, course);

            //res.end(`
                //We received our first request from the client at resource ${pathname.toLowerCase()} with query parameter ${query.id}
                //${JSON.stringify(course)} // convert object back to string
            //`);
            res.end(courseHTML);
        } else {
            res.writeHead(404, {
                'Content-type': 'text/html'
            });
            res.end(`Resource not found`);
        }
    }
});

// Start Listening to requests
server.listen(8000, 'localhost', () => {
    console.log('Listening to requests on port 8000');
});
