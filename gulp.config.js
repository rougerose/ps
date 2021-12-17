module.exports = {
  js: {
    src: ["src/js"],
    dest: "dist/js",
    name: "photoswipe-init.js",
  },
  clean: ["dist/js/*.js", "dist/*js", "!dist/"],
  tasks: {
    js: true,
    clean: true,
  },
};
