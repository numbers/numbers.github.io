numbersdoc
==========

Documentation for numbers.js. Any info about contributing to the repo itself can be found at the repo's page: 
https://github.com/sjkaliski/numbers.js.

## Contributing
**Note**: if any changes are made, the Jade files must be recompiled. See below for more info.

### Small changes
If you notice something wrong or that something's missing in the documentation, just alter the doc.json file appropriately.

### Adding a module
Adding a module (i.e. a new component of numbers.js, e.g. numbers.yourmodule) is a bit more work. You must first make a Jade file in the `views/` directory (named appropriately, such as `yourmodule.jade`). The content in here is basically a copy-paste of any other module file in the directory, just change some of the lines (should be obvious).

Then, the `views/navbar.jade`, `views/doc.jade`, and `views/examples.jade` files must be edited. Just add your module name to the dropdown in each.

The worst part: add your module information into `doc.json`. Use `"yourmodule"` as the key and following the exact same structure as the rest of the file, otherwise shit won't work. That should be it!

### Compiling Jade to HTML
All you have to do is run

```
npm run compile
```

and all of the compilation will be done for you.

## Acknowledgements
Thanks to Jacky Ngai for creating the logo!
