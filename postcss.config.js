module.exports = {
    syntax: "postcss-scss",
    plugins: [
        require("postcss-easy-import")({
            extensions: ".scss"
        }),
        require("autoprefixer")({
            cascade: false
        }),
        require("postcss-preset-env")(),
        require("postcss-pxtorem")({
            propList: ["font-size"],
            selectorBlackList: [":root", "html"]
        }),
        require("postcss-advanced-variables")({
            variables: require("./assets/variables.json")
        }),
        require("postcss-nested"),
        require("postcss-rgb"),
        require("postcss-inline-comment"),
        require("postcss-inline-svg")({
            removeFill: true,
            path: "./assets/assets/images/icons"
        }),
        require("postcss-svgo"),
        require("cssnano")()
    ]
};
