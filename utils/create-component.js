var prompt = require('prompt');
var mkdirp = require('mkdirp');
var fs = require('fs');

var name;
var reactImport = "import React, { PropTypes, Component } from 'react';\n";
var stylesImport = "import styles from './";

prompt.start();
prompt.get('ComponentName', function(err, result) {
  if (err) {
    console.log("Error:", err);
    return 1;
  }
  if (result.ComponentName.length < 1) {
    console.log("Type a component name");
    return;
  } else {
    name = result.ComponentName;
    mkdirp('./src/components/' + name, function(err) {
      if (err) console.log("Error:", err);
      else {
        console.log('Folder', name, 'created');
        var filePath = './src/components/' + name + '/' + name;
        /* write to ComponentName.js file */
        var ws = fs.createWriteStream(filePath + '.js', {
          flags: 'w',
          defaultEncoding: 'utf8',
          autoClose: true
        });
        var component = "class " + name + " extends Component {\n\t" +
          "static propTypes = {}\n\t" +
          "render() {\n\t\treturn (<div></div>)\n\t}\n}\n" +
          "module.exports = " + name + ";";
        ws.write(reactImport);
        ws.write(stylesImport + name + ".css';\n\n");
        ws.write(component);

        /* write to ComponentName.css file */
        var ws = fs.createWriteStream(filePath + '.css', {
          flags: 'w',
          defaultEncoding: 'utf8',
          autoClose: true
        });
        var styleName = name[0].toLowerCase() + name.slice(1,name.length);
        var styles = ":local {\n\t." + styleName +  " {\n\t}\n}";
        ws.write(styles);

        /* write to ComponentName.test.js file */
        var ws = fs.createWriteStream(filePath + '.test.js', {
          flags: 'w',
          defaultEncoding: 'utf8',
          autoClose: true
        });
        var tests = "import expect from 'expect';\n" +
          "import React from 'react';\n" +
          "import ReactDOM from 'react-dom';\n" +
          "import TestUtils from 'react-addons-test-utils';\n" +
          "import $ from 'jQuery';\n\n" +
          "describe('" + name + "', () => {\n\t" +
          "it('should render " + name + "', () => {\n\t});\n});";
        ws.write(tests);
      }
    });
    return;
  }

});
