numbersdoc
==========

documentation for numbers.js. any info about contributing to the repo itself can be found at the repo's page: 
https://github.com/sjkaliski/numbers.js.

## contributing
**Note**: if any changes are made, the Jade files must be recompiled. see below for more info.

### small changes
if you notice something wrong or that something's missing in the documentation, just alter the doc.json file appropriately.

### adding a module
adding a module (i.e. a new component of numbers.js, e.g. numbers.yourmodule) is a bit more work. you must first make a Jade file in the ```views/``` directory (named appropriately, such as yourmodule.jade). the content in here is basically a copy-paste of any other module file in the directory, just change some of the lines (should be obvious).

then, the ```views/navbar.jade```, ```views/doc.jade```, and ```views/examples.jade``` files must be edited. just add your module name to the dropdown in each.

the worst part: add your module information into ```doc.json```. use 'yourmodule' as the key and following the exact same structure as the rest of the file, otherwise shit won't work. that should be it!

### compiling Jade to HTML
all you have to do is run

```
npm run compile
```

and all of the compilation will be done for you.

## acknowledgements
thanks to Jacky Ngai for creating the logo!