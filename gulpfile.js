const { gulp, src, dest, watch, series, parallel } = require("gulp");
const config = require("./gulp.config.js");
const del = require("del");
const rollup = require("rollup");
// const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");


// Clean task
const clean = function (done) {
  // Make sure this feature is activated before running
  if (!config.tasks.clean) return done();

  del.sync(config.clean);

  // Signal completion
  return done();
};

// Scripts task
const js = function (done) {
  // Make sure this feature is activated before running
  if (!config.tasks.js) return done();

  return rollup
    .rollup({
      input: config.js.src + "/init.js",
      plugins: [
        // nodeResolve(),
        process.env.NODE_ENV === "production" && terser(),
      ],
    })
    .then((bundle) => {
      return bundle.write({
        file: config.js.dest + "/" + config.js.name,
        format: "iife",
      });
    });
};

// Watch for changes
const watchSource = function (done) {
  watch(config.js.src + "/**/*.js", series(js));

  // Signal completion
  done();
};

// Default task = dev + watch
exports.default = series(clean, js, watchSource);

// Clean task
exports.clean = clean;

// Dev task
exports.dev = series(clean, js);

// Build task
exports.build = series(clean, js);
