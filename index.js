 //console.log("hello node");

const a = {
    average: (a,b) => {
        console.log((a+b)/2);
    },
    percent: (a,b) => {
        console.log(a/b*100);
    }
}; // everything is a module in NodeJS (three types - file based, built in, 3rd party )

module.exports = a;
